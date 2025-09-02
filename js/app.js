// ===== GLOBAL VARIABLES =====
let currentUser = null;

// ===== LANGUAGE CONTENT =====
const languageContent = {
    ar: {
        // Navigation
        home: 'الرئيسية',
        studyContent: 'المحتوي الدراسي',
        practicalContent: 'المحتوى العملي',
        courses: 'المواد الدراسية',
        videos: 'الفيديوهات التعليمية',
        materials: 'المواد الإضافية',
        offers: 'العروض',
        articles: 'مقالات',
        professionalDiplomas: 'الدبلومات المهنية',
        announcements: 'الإعلانات',
        store: 'المتجر',
        forum: 'المنتدى',
        reference: 'المرجع',
        dictionary: 'القاموس الطبي',
        medicines: 'الأدوية',
        support: 'الدعم',
        technicalSupport: 'الدعم الفني',
        psychologicalSupport: 'الدعم النفسي',
        about: 'من نحن',
        profile: 'الملف الشخصي',
        login: 'تسجيل الدخول',
        register: 'حساب جديد',
        dashboard: 'لوحة التحكم',
        myCourses: 'كورساتي',
        logout: 'تسجيل الخروج',
        
        // Common
        search: 'البحث',
        loading: 'جاري التحميل...',
        save: 'حفظ',
        cancel: 'إلغاء',
        edit: 'تعديل',
        delete: 'حذف',
        view: 'عرض',
        add: 'إضافة',
        submit: 'إرسال',
        close: 'إغلاق',
        
        // Buttons
        explore: 'استكشف',
        watch: 'شاهد',
        register: 'سجل الآن',
        learnMore: 'اعرف المزيد',
        startQuiz: 'ابدأ الاختبار',
        viewResults: 'عرض النتائج',
        viewDetails: 'عرض التفاصيل',
        download: 'تحميل',
        
        // Messages
        success: 'تم بنجاح',
        error: 'حدث خطأ',
        warning: 'تحذير',
        info: 'معلومات',
        
        // Time
        days: 'أيام',
        hours: 'ساعات',
        minutes: 'دقائق',
        seconds: 'ثواني',
        
        // Currency
        currency: 'جنيه مصري',
        price: 'السعر',
        discount: 'خصم',
        originalPrice: 'السعر الأصلي',
        finalPrice: 'السعر النهائي',
        
        // Quiz
        easy: 'سهل',
        medium: 'متوسط',
        hard: 'صعب',
        quizResults: 'نتائج الاختبار',
        correctAnswers: 'الإجابات الصحيحة',
        totalQuestions: 'إجمالي الأسئلة',
        score: 'الدرجة',
        timeSpent: 'الوقت المستغرق',
        
        // Course
        lecture: 'محاضرة',
        lectures: 'محاضرات',
        course: 'كورس',
        courses: 'كورسات',
        enrolled: 'مسجل',
        notEnrolled: 'غير مسجل',
        progress: 'التقدم',
        completed: 'مكتمل',
        inProgress: 'قيد التقدم',
        notStarted: 'لم يبدأ'
    },
    en: {
        // Navigation
        home: 'Home',
        studyContent: 'Study Content',
        practicalContent: 'Practical Content',
        courses: 'Courses',
        videos: 'Videos',
        materials: 'Materials',
        offers: 'Offers',
        articles: 'Articles',
        professionalDiplomas: 'Professional Diplomas',
        announcements: 'Announcements',
        store: 'Store',
        forum: 'Forum',
        reference: 'Reference',
        dictionary: 'Medical Dictionary',
        medicines: 'Medicines',
        support: 'Support',
        technicalSupport: 'Technical Support',
        psychologicalSupport: 'Psychological Support',
        about: 'About Us',
        profile: 'Profile',
        login: 'Login',
        register: 'Register',
        dashboard: 'Dashboard',
        myCourses: 'My Courses',
        logout: 'Logout',
        
        // Common
        search: 'Search',
        loading: 'Loading...',
        save: 'Save',
        cancel: 'Cancel',
        edit: 'Edit',
        delete: 'Delete',
        view: 'View',
        add: 'Add',
        submit: 'Submit',
        close: 'Close',
        
        // Buttons
        explore: 'Explore',
        watch: 'Watch',
        register: 'Register Now',
        learnMore: 'Learn More',
        startQuiz: 'Start Quiz',
        viewResults: 'View Results',
        viewDetails: 'View Details',
        download: 'Download',
        
        // Messages
        success: 'Success',
        error: 'Error',
        warning: 'Warning',
        info: 'Information',
        
        // Time
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        
        // Currency
        currency: 'EGP',
        price: 'Price',
        discount: 'Discount',
        originalPrice: 'Original Price',
        finalPrice: 'Final Price',
        
        // Quiz
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard',
        quizResults: 'Quiz Results',
        correctAnswers: 'Correct Answers',
        totalQuestions: 'Total Questions',
        score: 'Score',
        timeSpent: 'Time Spent',
        
        // Course
        lecture: 'Lecture',
        lectures: 'Lectures',
        course: 'Course',
        courses: 'Courses',
        enrolled: 'Enrolled',
        notEnrolled: 'Not Enrolled',
        progress: 'Progress',
        completed: 'Completed',
        inProgress: 'In Progress',
        notStarted: 'Not Started'
    }
};

// ===== NAVBAR FUNCTIONALITY =====
function initializeNavbar() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNavbar');
        const scrollProgress = document.getElementById('scrollProgress');
        
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
        
        // Update scroll progress
        if (scrollProgress) {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }
    });

    // Search functionality
    window.toggleSearch = function() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.classList.toggle('expanded');
            if (searchInput.classList.contains('expanded')) {
                searchInput.focus();
            }
        }
    };

    // Dark mode toggle
    window.toggleDarkMode = function() {
        document.body.classList.toggle('dark-mode');
        const icon = document.querySelector('.dark-mode-toggle i');
        if (icon) {
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('bi-moon-fill');
                icon.classList.add('bi-sun-fill');
            } else {
                icon.classList.remove('bi-sun-fill');
                icon.classList.add('bi-moon-fill');
            }
        }
    };

    // Chatbot functionality
    window.openChatbot = function() {
        window.open('chat.html');
    };
}

// ===== ANIMATION FUNCTIONS =====
function initializeAnimations() {
    // Counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                if (entry.target.classList.contains('stat-item')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.mission-card, .team-member, .value-item, .stat-item, .card, .row');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== LANGUAGE FUNCTIONS =====
// These functions are now handled by LanguageSystem in language.js
function changeLanguage(lang) {
    if (window.LanguageSystem) {
        LanguageSystem.changeLanguage(lang);
    }
}

// ===== UTILITY FUNCTIONS =====
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type} border-0`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
            ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove toast after it's hidden
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

function logout() {
    currentUser = null;
    document.getElementById('auth-buttons').style.display = 'block';
    document.getElementById('user-menu').style.display = 'none';
    showToast('تم تسجيل الخروج بنجاح', 'success');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Wait for navbar to be loaded before initializing
    const checkNavbar = setInterval(() => {
        if (document.getElementById('navbarNav')) {
            clearInterval(checkNavbar);
            initializeNavbar();
            initializeAnimations();
            
            // Check if user is logged in
            if (currentUser) {
                const authButtons = document.querySelector('.auth-buttons');
                const userMenu = document.getElementById('user-menu');
                const userName = document.getElementById('user-name');
                
                if (authButtons) authButtons.style.display = 'none';
                if (userMenu) userMenu.style.display = 'block';
                if (userName) userName.textContent = currentUser.name;
            }
        }
    }, 100);
}); 