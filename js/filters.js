/**
 * FilterKit - Universal Filtering System for NursingIQ
 * A comprehensive, reusable filtering solution for all listing pages
 * 
 * @author NursingIQ Team
 * @version 1.0.0
 */

class FilterKit {
    constructor() {
        this.config = null;
        this.items = [];
        this.filteredItems = [];
        this.activeFilters = {};
        this.debounceTimers = {};
        this.observers = [];
        this.isInitialized = false;
    }

    /**
     * Initialize the filtering system
     * @param {Object} config - Configuration object
     */
    init(config) {
        this.config = {
            root: null,
            itemSelector: '.item',
            controls: {},
            sources: {},
            onChange: null,
            persistKey: 'filterkit-state',
            pagination: { enabled: false, container: null, pageSize: 12 },
            sorters: {},
            ...config
        };

        this.setupEventListeners();
        this.loadPersistedState();
        this.updateURL();
        this.isInitialized = true;
        this.updateResults();
    }

    /**
     * Set items to filter
     * @param {Array|NodeList} items - Items to filter
     */
    setItems(items) {
        this.items = Array.from(items);
        this.filteredItems = [...this.items];
        this.updateResults();
    }

    /**
     * Update filters with new criteria
     * @param {Object} criteria - Filter criteria
     */
    update(criteria) {
        this.activeFilters = { ...this.activeFilters, ...criteria };
        this.updateResults();
        this.savePersistedState();
        this.updateURL();
    }

    /**
     * Reset all filters
     */
    reset() {
        this.activeFilters = {};
        this.filteredItems = [...this.items];
        this.updateResults();
        this.savePersistedState();
        this.updateURL();
        this.clearAllControls();
    }

    /**
     * Setup event listeners for all controls
     */
    setupEventListeners() {
        const { controls } = this.config;

        // Text search with debounce
        if (controls.search) {
            const searchInput = document.querySelector(controls.search);
            if (searchInput) {
                searchInput.addEventListener('input', this.debounce((e) => {
                    this.update({ search: e.target.value });
                }, 250));
            }
        }

        // Checkboxes (multi-select)
        Object.entries(controls).forEach(([key, selector]) => {
            if (key.includes('categories') || key.includes('tags') || key.includes('type')) {
                const checkboxes = document.querySelectorAll(selector);
                checkboxes.forEach(checkbox => {
                    checkbox.addEventListener('change', () => {
                        this.updateMultiSelect(key, selector);
                    });
                });
            }
        });

        // Radio buttons (single-select)
        Object.entries(controls).forEach(([key, selector]) => {
            if (key.includes('difficulty') || key.includes('section') || key.includes('sort')) {
                const radios = document.querySelectorAll(selector);
                radios.forEach(radio => {
                    radio.addEventListener('change', () => {
                        this.updateSingleSelect(key, selector);
                    });
                });
            }
        });

        // Range inputs
        ['priceMin', 'priceMax', 'ratingMin', 'ratingMax', 'dateFrom', 'dateTo'].forEach(key => {
            if (controls[key]) {
                const input = document.querySelector(controls[key]);
                if (input) {
                    input.addEventListener('input', this.debounce((e) => {
                        this.update({ [key]: e.target.value });
                    }, 250));
                }
            }
        });

        // Toggle switches
        ['inStock', 'available', 'discounted'].forEach(key => {
            if (controls[key]) {
                const toggle = document.querySelector(controls[key]);
                if (toggle) {
                    toggle.addEventListener('change', (e) => {
                        this.update({ [key]: e.target.checked });
                    });
                }
            }
        });

        // Clear all button
        if (controls.clearAll) {
            const clearBtn = document.querySelector(controls.clearAll);
            if (clearBtn) {
                clearBtn.addEventListener('click', () => this.reset());
            }
        }

        // Pagination controls
        if (this.config.pagination.enabled) {
            this.setupPaginationListeners();
        }
    }

    /**
     * Update multi-select filters
     * @param {string} key - Filter key
     * @param {string} selector - CSS selector
     */
    updateMultiSelect(key, selector) {
        const checkboxes = document.querySelectorAll(selector);
        const selectedValues = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        this.update({ [key]: selectedValues });
    }

    /**
     * Update single-select filters
     * @param {string} key - Filter key
     * @param {string} selector - CSS selector
     */
    updateSingleSelect(key, selector) {
        const radios = document.querySelectorAll(selector);
        const selectedValue = Array.from(radios)
            .find(radio => radio.checked)?.value;
        
        this.update({ [key]: selectedValue });
    }

    /**
     * Apply all active filters
     */
    applyFilters() {
        let filtered = [...this.items];

        // Text search
        if (this.activeFilters.search) {
            const searchTerm = this.activeFilters.search.toLowerCase();
            filtered = filtered.filter(item => {
                const title = item.getAttribute('data-title') || '';
                const desc = item.getAttribute('data-desc') || '';
                return title.toLowerCase().includes(searchTerm) || 
                       desc.toLowerCase().includes(searchTerm);
            });
        }

        // Multi-select filters
        ['categories', 'tags', 'type'].forEach(key => {
            if (this.activeFilters[key] && this.activeFilters[key].length > 0) {
                filtered = filtered.filter(item => {
                    const itemValue = item.getAttribute(`data-${key.slice(0, -1)}`);
                    return this.activeFilters[key].includes(itemValue);
                });
            }
        });

        // Single-select filters
        ['difficulty', 'section', 'author'].forEach(key => {
            if (this.activeFilters[key]) {
                filtered = filtered.filter(item => {
                    const itemValue = item.getAttribute(`data-${key}`);
                    return itemValue === this.activeFilters[key];
                });
            }
        });

        // Range filters
        if (this.activeFilters.priceMin || this.activeFilters.priceMax) {
            filtered = filtered.filter(item => {
                const price = parseFloat(item.getAttribute('data-price') || 0);
                const min = parseFloat(this.activeFilters.priceMin) || 0;
                const max = parseFloat(this.activeFilters.priceMax) || Infinity;
                return price >= min && price <= max;
            });
        }

        if (this.activeFilters.ratingMin || this.activeFilters.ratingMax) {
            filtered = filtered.filter(item => {
                const rating = parseFloat(item.getAttribute('data-rating') || 0);
                const min = parseFloat(this.activeFilters.ratingMin) || 0;
                const max = parseFloat(this.activeFilters.ratingMax) || 5;
                return rating >= min && rating <= max;
            });
        }

        // Date range filters
        if (this.activeFilters.dateFrom || this.activeFilters.dateTo) {
            filtered = filtered.filter(item => {
                const itemDate = new Date(item.getAttribute('data-date') || '');
                const fromDate = this.activeFilters.dateFrom ? new Date(this.activeFilters.dateFrom) : new Date(0);
                const toDate = this.activeFilters.dateTo ? new Date(this.activeFilters.dateTo) : new Date();
                return itemDate >= fromDate && itemDate <= toDate;
            });
        }

        // Boolean filters
        ['inStock', 'available', 'discounted'].forEach(key => {
            if (this.activeFilters[key] !== undefined) {
                filtered = filtered.filter(item => {
                    const itemValue = item.getAttribute(`data-${key}`) === 'true';
                    return itemValue === this.activeFilters[key];
                });
            }
        });

        // Sorting
        if (this.activeFilters.sort) {
            filtered = this.sortItems(filtered, this.activeFilters.sort);
        }

        this.filteredItems = filtered;
    }

    /**
     * Sort items based on criteria
     * @param {Array} items - Items to sort
     * @param {string} sortBy - Sort criteria
     * @returns {Array} Sorted items
     */
    sortItems(items, sortBy) {
        const [field, direction] = sortBy.split('-');
        const isAsc = direction === 'asc';

        return items.sort((a, b) => {
            let aVal = a.getAttribute(`data-${field}`);
            let bVal = b.getAttribute(`data-${field}`);

            // Handle different data types
            if (field === 'price' || field === 'rating') {
                aVal = parseFloat(aVal) || 0;
                bVal = parseFloat(bVal) || 0;
            } else if (field === 'date') {
                aVal = new Date(aVal || 0);
                bVal = new Date(bVal || 0);
            } else {
                aVal = (aVal || '').toString().toLowerCase();
                bVal = (bVal || '').toString().toLowerCase();
            }

            if (aVal < bVal) return isAsc ? -1 : 1;
            if (aVal > bVal) return isAsc ? 1 : -1;
            return 0;
        });
    }

    /**
     * Update the DOM with filtered results
     */
    updateResults() {
        if (!this.isInitialized) return;

        this.applyFilters();
        this.updateDOM();
        this.updatePagination();
        this.updateActiveChips();
        this.updateResultsCount();
        this.handleEmptyState();

        // Call onChange callback
        if (this.config.onChange) {
            this.config.onChange({
                items: this.getCurrentPageItems(),
                totalItems: this.filteredItems.length,
                activeFilters: this.activeFilters,
                currentPage: this.currentPage || 1
            });
        }
    }

    /**
     * Update DOM elements visibility
     */
    updateDOM() {
        const { itemSelector } = this.config;
        const items = document.querySelectorAll(itemSelector);
        
        items.forEach((item, index) => {
            const isVisible = this.filteredItems.includes(item);
            
            if (isVisible) {
                item.classList.remove('is-hidden', 'fade-out');
                item.classList.add('fade-in');
            } else {
                item.classList.add('is-hidden', 'fade-out');
                item.classList.remove('fade-in');
            }
        });
    }

    /**
     * Update pagination
     */
    updatePagination() {
        if (!this.config.pagination.enabled) return;

        const totalPages = Math.ceil(this.filteredItems.length / this.config.pagination.pageSize);
        this.currentPage = Math.min(this.currentPage || 1, totalPages || 1);

        if (this.config.pagination.container) {
            this.renderPagination(totalPages);
        }
    }

    /**
     * Render pagination controls
     * @param {number} totalPages - Total number of pages
     */
    renderPagination(totalPages) {
        const container = document.querySelector(this.config.pagination.container);
        if (!container) return;

        if (totalPages <= 1) {
            container.innerHTML = '';
            return;
        }

        let html = '<div class="pagination-wrapper">';
        
        // Previous button
        html += `<button class="btn btn-outline-primary" ${this.currentPage === 1 ? 'disabled' : ''} onclick="FilterKit.goToPage(${this.currentPage - 1})">السابق</button>`;
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                html += `<button class="btn ${i === this.currentPage ? 'btn-primary' : 'btn-outline-primary'}" onclick="FilterKit.goToPage(${i})">${i}</button>`;
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                html += '<span class="pagination-ellipsis">...</span>';
            }
        }
        
        // Next button
        html += `<button class="btn btn-outline-primary" ${this.currentPage === totalPages ? 'disabled' : ''} onclick="FilterKit.goToPage(${this.currentPage + 1})">التالي</button>`;
        
        html += '</div>';
        container.innerHTML = html;
    }

    /**
     * Go to specific page
     * @param {number} page - Page number
     */
    goToPage(page) {
        const totalPages = Math.ceil(this.filteredItems.length / this.config.pagination.pageSize);
        if (page >= 1 && page <= totalPages) {
            this.currentPage = page;
            this.updateResults();
        }
    }

    /**
     * Get current page items
     * @returns {Array} Items for current page
     */
    getCurrentPageItems() {
        if (!this.config.pagination.enabled) {
            return this.filteredItems;
        }

        const start = (this.currentPage - 1) * this.config.pagination.pageSize;
        const end = start + this.config.pagination.pageSize;
        return this.filteredItems.slice(start, end);
    }

    /**
     * Update active filter chips
     */
    updateActiveChips() {
        // Implementation for showing active filter chips
        // This would create visual chips showing active filters with remove buttons
    }

    /**
     * Update results count display
     */
    updateResultsCount() {
        const countElement = document.querySelector('.results-count');
        if (countElement) {
            countElement.textContent = `${this.filteredItems.length} نتيجة`;
        }
    }

    /**
     * Handle empty state
     */
    handleEmptyState() {
        const emptyState = document.querySelector('.empty-state');
        const hasResults = this.filteredItems.length > 0;

        if (emptyState) {
            emptyState.style.display = hasResults ? 'none' : 'block';
        }

        if (!hasResults) {
            this.showEmptyState();
        }
    }

    /**
     * Show empty state message
     */
    showEmptyState() {
        const container = this.config.root;
        if (!container) return;

        let emptyState = container.querySelector('.empty-state');
        if (!emptyState) {
            emptyState = document.createElement('div');
            emptyState.className = 'empty-state text-center py-5';
            container.appendChild(emptyState);
        }

        emptyState.innerHTML = `
            <i class="bi bi-search display-1 text-muted mb-3"></i>
            <h4 class="text-muted">لا توجد نتائج</h4>
            <p class="text-muted">جرب تغيير معايير البحث</p>
            <button class="btn btn-primary" onclick="FilterKit.reset()">إعادة تعيين الفلاتر</button>
        `;
    }

    /**
     * Clear all control values
     */
    clearAllControls() {
        const { controls } = this.config;

        Object.entries(controls).forEach(([key, selector]) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element.type === 'checkbox' || element.type === 'radio') {
                    element.checked = false;
                } else if (element.type === 'text' || element.type === 'search') {
                    element.value = '';
                } else if (element.tagName === 'SELECT') {
                    element.selectedIndex = 0;
                }
            });
        });
    }

    /**
     * Save state to localStorage
     */
    savePersistedState() {
        if (this.config.persistKey) {
            localStorage.setItem(this.config.persistKey, JSON.stringify({
                filters: this.activeFilters,
                page: this.currentPage || 1
            }));
        }
    }

    /**
     * Load state from localStorage
     */
    loadPersistedState() {
        if (this.config.persistKey) {
            const saved = localStorage.getItem(this.config.persistKey);
            if (saved) {
                try {
                    const state = JSON.parse(saved);
                    this.activeFilters = state.filters || {};
                    this.currentPage = state.page || 1;
                    this.updateControlsFromState();
                } catch (e) {
                    console.warn('Failed to load persisted filter state:', e);
                }
            }
        }
    }

    /**
     * Update controls from saved state
     */
    updateControlsFromState() {
        const { controls } = this.config;

        Object.entries(this.activeFilters).forEach(([key, value]) => {
            const selector = controls[key];
            if (!selector) return;

            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element.type === 'checkbox') {
                    element.checked = Array.isArray(value) ? value.includes(element.value) : value;
                } else if (element.type === 'radio') {
                    element.checked = element.value === value;
                } else if (element.type === 'text' || element.type === 'search') {
                    element.value = value || '';
                } else if (element.tagName === 'SELECT') {
                    element.value = value || '';
                }
            });
        });
    }

    /**
     * Update URL with current state
     */
    updateURL() {
        if (!window.history || !window.history.pushState) return;

        const params = new URLSearchParams();
        Object.entries(this.activeFilters).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
                if (Array.isArray(value)) {
                    value.forEach(v => params.append(key, v));
                } else {
                    params.set(key, value);
                }
            }
        });

        const newURL = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
        window.history.pushState({}, '', newURL);
    }

    /**
     * Parse URL parameters on load
     */
    parseURLParams() {
        const params = new URLSearchParams(window.location.search);
        const filters = {};

        params.forEach((value, key) => {
            if (filters[key]) {
                if (!Array.isArray(filters[key])) {
                    filters[key] = [filters[key]];
                }
                filters[key].push(value);
            } else {
                filters[key] = value;
            }
        });

        return filters;
    }

    /**
     * Debounce function
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     * @returns {Function} Debounced function
     */
    debounce(func, wait) {
        return (...args) => {
            clearTimeout(this.debounceTimers[func]);
            this.debounceTimers[func] = setTimeout(() => func.apply(this, args), wait);
        };
    }

    /**
     * Setup pagination event listeners
     */
    setupPaginationListeners() {
        // Implementation for pagination controls
    }
}

// Global instance
const FilterKit = new FilterKit();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FilterKit;
}
