// ===== LANGUAGE SYSTEM =====
const LanguageSystem = {
    currentLanguage: 'ar',
    
    // Comprehensive translations object
    languageContent: {
        ar: {
            // Navigation
            home: 'الرئيسية',
            learning: 'التعلم',
            community: 'المجتمع',
            studyContent: 'المحتوى الدراسي',
            practicalContent: 'المحتوى العملي',
            articles: 'المقالات',
            forum: 'المنتدى',
            announcements: 'الإعلانات',
            offers: 'العروض',
            store: 'المتجر',
            reference: 'المرجع',
            dictionary: 'القاموس الطبي',
            medicines: 'الأدوية',
            support: 'الدعم',
            technicalSupport: 'الدعم الفني',
            psychologicalSupport: 'الدعم النفسي',
            about: 'من نحن',
            profile: 'الملف الشخصي',
            
            // Auth
            login: 'تسجيل الدخول',
            register: 'حساب جديد',
            logout: 'تسجيل الخروج',
            dashboard: 'لوحة التحكم',
            myCourses: 'كورساتي',
            
            // Common
            search: 'بحث',
            clear: 'مسح',
            save: 'حفظ',
            cancel: 'إلغاء',
            edit: 'تعديل',
            delete: 'حذف',
            view: 'عرض',
            more: 'المزيد',
            loading: 'جاري التحميل...',
            error: 'خطأ',
            success: 'نجح',
            warning: 'تحذير',
            info: 'معلومات',
            submit: 'إرسال',
            back: 'رجوع',
            next: 'التالي',
            previous: 'السابق',
            close: 'إغلاق',
            open: 'فتح',
            download: 'تحميل',
            upload: 'رفع',
            share: 'مشاركة',
            print: 'طباعة',
            copy: 'نسخ',
            paste: 'لصق',
            cut: 'قص',
            undo: 'تراجع',
            redo: 'إعادة',
            
            // Chatbot
            chatbot: 'المساعد الذكي',
            sendMessage: 'إرسال',
            typing: 'جاري الكتابة...',
            clearChat: 'مسح المحادثة',
            exportChat: 'تصدير المحادثة',
            startChat: 'ابدأ المحادثة',
            endChat: 'إنهاء المحادثة',
            
            // Filter System
            filters: 'الفلاتر',
            sortBy: 'ترتيب حسب',
            price: 'السعر',
            rating: 'التقييم',
            date: 'التاريخ',
            category: 'الفئة',
            difficulty: 'الصعوبة',
            duration: 'المدة',
            results: 'النتائج',
            noResults: 'لا توجد نتائج',
            resetFilters: 'إعادة تعيين الفلاتر',
            applyFilters: 'تطبيق الفلاتر',
            
            // Hero Section
            heroTitle: 'منصة مساعدة طلاب التمريض',
            heroSubtitle: 'اكتشف المواد الدراسية، انضم للتدريب العملي، وطور مهاراتك في مجال التمريض',
            exploreMaterials: 'استكشف المواد',
            joinTraining: 'انضم للتدريب',
            exploreSkills: 'استكشف المهارات',
            
            // Features
            whyChooseUs: 'لماذا تختار NursingIQ؟',
            featuresSubtitle: 'منصة شاملة تجمع بين التعليم النظري والتدريب العملي',
            comprehensiveMaterials: 'مواد شاملة',
            comprehensiveMaterialsDesc: 'مواد دراسية شاملة تغطي جميع جوانب التمريض',
            practicalTraining: 'تدريب عملي',
            practicalTrainingDesc: 'تدريب عملي في مستشفيات ومعاهد معتمدة',
            communitySupport: 'دعم مجتمعي',
            communitySupportDesc: 'مجتمع داعم من طلاب وأساتذة التمريض',
            
            // Footer
            footerDescription: 'منصة شاملة لمساعدة طلاب التمريض في رحلتهم التعليمية',
            quickLinks: 'روابط سريعة',
            contactUs: 'تواصل معنا',
            privacyPolicy: 'سياسة الخصوصية',
            termsOfService: 'شروط الخدمة',
            allRightsReserved: 'جميع الحقوق محفوظة',
            
            // Page Titles
            pageTitleHome: 'NursingIQ - منصة مساعدة طلاب التمريض',
            pageTitleAbout: 'من نحن - NursingIQ',
            pageTitleCourses: 'المواد الدراسية - NursingIQ',
            pageTitleTraining: 'التدريب العملي - NursingIQ',
            pageTitleArticles: 'المقالات - NursingIQ',
            pageTitleForum: 'المنتدى - NursingIQ',
            pageTitleStore: 'المتجر - NursingIQ',
            pageTitleSupport: 'الدعم - NursingIQ',
            pageTitleLogin: 'تسجيل الدخول - NursingIQ',
            pageTitleRegister: 'حساب جديد - NursingIQ',
            
            // Form Labels
            email: 'البريد الإلكتروني',
            password: 'كلمة المرور',
            confirmPassword: 'تأكيد كلمة المرور',
            fullName: 'الاسم الكامل',
            phone: 'رقم الهاتف',
            address: 'العنوان',
            city: 'المدينة',
            country: 'البلد',
            birthDate: 'تاريخ الميلاد',
            gender: 'الجنس',
            male: 'ذكر',
            female: 'أنثى',
            other: 'آخر',
            
            // Validation Messages
            requiredField: 'هذا الحقل مطلوب',
            invalidEmail: 'البريد الإلكتروني غير صحيح',
            passwordTooShort: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل',
            passwordsDoNotMatch: 'كلمات المرور غير متطابقة',
            invalidPhone: 'رقم الهاتف غير صحيح',
            
            // Success/Error Messages
            loginSuccess: 'تم تسجيل الدخول بنجاح',
            logoutSuccess: 'تم تسجيل الخروج بنجاح',
            registrationSuccess: 'تم إنشاء الحساب بنجاح',
            saveSuccess: 'تم الحفظ بنجاح',
            deleteSuccess: 'تم الحذف بنجاح',
            updateSuccess: 'تم التحديث بنجاح',
            generalError: 'حدث خطأ، يرجى المحاولة مرة أخرى',
            networkError: 'خطأ في الاتصال، يرجى التحقق من الإنترنت',
            
            // Theme
            lightMode: 'الوضع المضيء',
            darkMode: 'الوضع المظلم',
            themeSwitched: 'تم التبديل إلى',
            
            // Language
            arabic: 'العربية',
            english: 'English',
            languageSwitched: 'تم تغيير اللغة إلى',
            
            // Accessibility
            toggleNavigation: 'تبديل التنقل',
            switchLanguage: 'تغيير اللغة',
            toggleTheme: 'تبديل المظهر',
            openChatbot: 'فتح المساعد الذكي',
            closeChatbot: 'إغلاق المساعد الذكي',
            scrollToTop: 'الانتقال إلى الأعلى',
            skipToContent: 'تخطي إلى المحتوى',
            skipToNavigation: 'تخطي إلى التنقل',
            
            // About Page
            aboutDescription: 'منصة NursingIQ هي منصة تعليمية متخصصة في مجال التمريض، تهدف إلى تقديم محتوى تعليمي عالي الجودة لطلاب التمريض في جميع أنحاء الوطن العربي.',
            activeStudents: 'طالب نشط',
            professionalTeachers: 'مدرس محترف',
            missionVision: 'مهمتنا ورؤيتنا',
            missionVisionSubtitle: 'نسعى لتقديم أفضل تجربة تعليمية لطلاب التمريض من خلال محتوى تفاعلي ومتطور',
            vision: 'الرؤية',
            visionDesc: 'أن نكون المنصة التعليمية الأولى في مجال التمريض في الوطن العربي، ونقدم محتوى تعليمي عالي الجودة يساعد الطلاب على تحقيق أحلامهم.',
            mission: 'المهمة',
            missionDesc: 'تقديم محتوى تعليمي متطور ومتخصص في مجال التمريض، مع التركيز على الجوانب العملية والنظرية، ومساعدة الطلاب على تطوير مهاراتهم.',
            values: 'القيم',
            valuesDesc: 'نؤمن بالجودة العالية، والابتكار، والشفافية، والتعاون، ونضع مصلحة الطلاب في المقام الأول.',
            team: 'فريق العمل',
            teamSubtitle: 'تعرف على الفريق المتميز الذي يعمل خلف الكواليس لتقديم أفضل تجربة تعليمية',
            coreValues: 'قيمنا الأساسية',
            coreValuesSubtitle: 'القيم التي نؤمن بها ونسعى لتحقيقها في كل ما نقدمه',
            highQuality: 'الجودة العالية',
            highQualityDesc: 'نحرص على تقديم محتوى تعليمي عالي الجودة يلبي احتياجات الطلاب',
            innovation: 'الابتكار',
            innovationDesc: 'نستخدم أحدث التقنيات والطرق التعليمية لتقديم تجربة فريدة',
            cooperation: 'التعاون',
            cooperationDesc: 'نؤمن بأهمية العمل الجماعي والتعاون لتحقيق الأهداف المشتركة',
            reliability: 'الموثوقية',
            reliabilityDesc: 'نقدم معلومات موثوقة ودقيقة من مصادر معتمدة'
        },
        en: {
            // Navigation
            home: 'Home',
            learning: 'Learning',
            community: 'Community',
            studyContent: 'Study Content',
            practicalContent: 'Practical Content',
            articles: 'Articles',
            forum: 'Forum',
            announcements: 'Announcements',
            offers: 'Offers',
            store: 'Store',
            reference: 'Reference',
            dictionary: 'Medical Dictionary',
            medicines: 'Medicines',
            support: 'Support',
            technicalSupport: 'Technical Support',
            psychologicalSupport: 'Psychological Support',
            about: 'About Us',
            profile: 'Profile',
            
            // Auth
            login: 'Login',
            register: 'Sign Up',
            logout: 'Logout',
            dashboard: 'Dashboard',
            myCourses: 'My Courses',
            
            // Common
            search: 'Search',
            clear: 'Clear',
            save: 'Save',
            cancel: 'Cancel',
            edit: 'Edit',
            delete: 'Delete',
            view: 'View',
            more: 'More',
            loading: 'Loading...',
            error: 'Error',
            success: 'Success',
            warning: 'Warning',
            info: 'Information',
            submit: 'Submit',
            back: 'Back',
            next: 'Next',
            previous: 'Previous',
            close: 'Close',
            open: 'Open',
            download: 'Download',
            upload: 'Upload',
            share: 'Share',
            print: 'Print',
            copy: 'Copy',
            paste: 'Paste',
            cut: 'Cut',
            undo: 'Undo',
            redo: 'Redo',
            
            // Chatbot
            chatbot: 'Smart Assistant',
            sendMessage: 'Send',
            typing: 'Typing...',
            clearChat: 'Clear Chat',
            exportChat: 'Export Chat',
            startChat: 'Start Chat',
            endChat: 'End Chat',
            
            // Filter System
            filters: 'Filters',
            sortBy: 'Sort by',
            price: 'Price',
            rating: 'Rating',
            date: 'Date',
            category: 'Category',
            difficulty: 'Difficulty',
            duration: 'Duration',
            results: 'Results',
            noResults: 'No results found',
            resetFilters: 'Reset Filters',
            applyFilters: 'Apply Filters',
            
            // Hero Section
            heroTitle: 'Nursing Student Platform',
            heroSubtitle: 'Discover study materials, join practical training, and develop your nursing skills',
            exploreMaterials: 'Explore Materials',
            joinTraining: 'Join Training',
            exploreSkills: 'Explore Skills',
            
            // Features
            whyChooseUs: 'Why Choose NursingIQ?',
            featuresSubtitle: 'A comprehensive platform combining theoretical education and practical training',
            comprehensiveMaterials: 'Comprehensive Materials',
            comprehensiveMaterialsDesc: 'Comprehensive study materials covering all aspects of nursing',
            practicalTraining: 'Practical Training',
            practicalTrainingDesc: 'Practical training in accredited hospitals and institutes',
            communitySupport: 'Community Support',
            communitySupportDesc: 'Supportive community of nursing students and professors',
            
            // Footer
            footerDescription: 'A comprehensive platform to help nursing students in their educational journey',
            quickLinks: 'Quick Links',
            contactUs: 'Contact Us',
            privacyPolicy: 'Privacy Policy',
            termsOfService: 'Terms of Service',
            allRightsReserved: 'All Rights Reserved',
            
            // Page Titles
            pageTitleHome: 'NursingIQ - Nursing Student Platform',
            pageTitleAbout: 'About Us - NursingIQ',
            pageTitleCourses: 'Study Materials - NursingIQ',
            pageTitleTraining: 'Practical Training - NursingIQ',
            pageTitleArticles: 'Articles - NursingIQ',
            pageTitleForum: 'Forum - NursingIQ',
            pageTitleStore: 'Store - NursingIQ',
            pageTitleSupport: 'Support - NursingIQ',
            pageTitleLogin: 'Login - NursingIQ',
            pageTitleRegister: 'Sign Up - NursingIQ',
            
            // Form Labels
            email: 'Email',
            password: 'Password',
            confirmPassword: 'Confirm Password',
            fullName: 'Full Name',
            phone: 'Phone Number',
            address: 'Address',
            city: 'City',
            country: 'Country',
            birthDate: 'Birth Date',
            gender: 'Gender',
            male: 'Male',
            female: 'Female',
            other: 'Other',
            
            // Validation Messages
            requiredField: 'This field is required',
            invalidEmail: 'Invalid email address',
            passwordTooShort: 'Password must be at least 8 characters',
            passwordsDoNotMatch: 'Passwords do not match',
            invalidPhone: 'Invalid phone number',
            
            // Success/Error Messages
            loginSuccess: 'Login successful',
            logoutSuccess: 'Logout successful',
            registrationSuccess: 'Account created successfully',
            saveSuccess: 'Saved successfully',
            deleteSuccess: 'Deleted successfully',
            updateSuccess: 'Updated successfully',
            generalError: 'An error occurred, please try again',
            networkError: 'Connection error, please check your internet',
            
            // Theme
            lightMode: 'Light Mode',
            darkMode: 'Dark Mode',
            themeSwitched: 'Switched to',
            
            // Language
            arabic: 'العربية',
            english: 'English',
            languageSwitched: 'Language changed to',
            
            // Accessibility
            toggleNavigation: 'Toggle Navigation',
            switchLanguage: 'Switch Language',
            toggleTheme: 'Toggle Theme',
            openChatbot: 'Open Smart Assistant',
            closeChatbot: 'Close Smart Assistant',
            scrollToTop: 'Scroll to Top',
            skipToContent: 'Skip to Content',
            skipToNavigation: 'Skip to Navigation',
            
            // About Page
            aboutDescription: 'NursingIQ is a specialized educational platform in the nursing field, aiming to provide high-quality educational content for nursing students across the Arab world.',
            activeStudents: 'Active Students',
            professionalTeachers: 'Professional Teachers',
            missionVision: 'Our Mission & Vision',
            missionVisionSubtitle: 'We strive to provide the best educational experience for nursing students through interactive and advanced content',
            vision: 'Vision',
            visionDesc: 'To be the leading educational platform in the nursing field in the Arab world, providing high-quality educational content that helps students achieve their dreams.',
            mission: 'Mission',
            missionDesc: 'Providing advanced and specialized educational content in the nursing field, focusing on practical and theoretical aspects, and helping students develop their skills.',
            values: 'Values',
            valuesDesc: 'We believe in high quality, innovation, transparency, cooperation, and put students\' interests first.',
            team: 'Our Team',
            teamSubtitle: 'Meet the distinguished team working behind the scenes to provide the best educational experience',
            coreValues: 'Our Core Values',
            coreValuesSubtitle: 'The values we believe in and strive to achieve in everything we offer',
            highQuality: 'High Quality',
            highQualityDesc: 'We are keen to provide high-quality educational content that meets students\' needs',
            innovation: 'Innovation',
            innovationDesc: 'We use the latest technologies and educational methods to provide a unique experience',
            cooperation: 'Cooperation',
            cooperationDesc: 'We believe in the importance of teamwork and cooperation to achieve common goals',
            reliability: 'Reliability',
            reliabilityDesc: 'We provide reliable and accurate information from trusted sources'
        }
    },
    
    // Initialize language system
    init() {
        // Load saved language from localStorage
        const savedLanguage = localStorage.getItem('nursingiq-language');
        if (savedLanguage && this.languageContent[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        }
        
        // Apply language on page load
        this.applyLanguage(this.currentLanguage);
        
        // Add fade animation class
        document.body.classList.add('language-transition');
    },
    
    // Change language with smooth animation
    changeLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        // Add fade out effect with better animation
        document.body.classList.add('language-fade-out');
        
        setTimeout(() => {
            this.applyLanguage(lang);
            
            // Fade back in
            document.body.classList.remove('language-fade-out');
            document.body.classList.add('language-fade-in');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                document.body.classList.remove('language-fade-in');
            }, 300);
        }, 150);
    },
    
    // Apply language to all elements
    applyLanguage(lang) {
        this.currentLanguage = lang;
        
        // Update document direction and language
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // Update all elements with data-lang-key
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (this.languageContent[lang] && this.languageContent[lang][key]) {
                element.textContent = this.languageContent[lang][key];
            }
        });
        
        // Update language switcher button
        const currentLanguageSpan = document.getElementById('currentLanguage');
        if (currentLanguageSpan) {
            currentLanguageSpan.textContent = lang === 'ar' ? 'العربية' : 'English';
        }
        
        // Update page title based on current page
        this.updatePageTitle(lang);
        
        // Save language preference
        localStorage.setItem('nursingiq-language', lang);
        
        // Show toast notification
        this.showLanguageToast(lang);
        
        // Trigger custom event for other scripts
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    },
    
    // Update page title based on current page
    updatePageTitle(lang) {
        const title = document.querySelector('title');
        if (!title) return;
        
        const currentPath = window.location.pathname;
        const pageName = currentPath.split('/').pop().replace('.html', '') || 'home';
        
        const titleKey = `pageTitle${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`;
        
        if (this.languageContent[lang] && this.languageContent[lang][titleKey]) {
            title.textContent = this.languageContent[lang][titleKey];
        } else {
            // Fallback to generic title
            title.textContent = lang === 'ar' ? 'NursingIQ - منصة مساعدة طلاب التمريض' : 'NursingIQ - Nursing Student Platform';
        }
    },
    
    // Get translation for a specific key
    getText(key) {
        return this.languageContent[this.currentLanguage]?.[key] || key;
    },
    
    // Format date according to current language
    formatDate(date) {
        return new Intl.DateTimeFormat(this.currentLanguage === 'ar' ? 'ar-EG' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },
    
    // Format number according to current language
    formatNumber(number) {
        return new Intl.NumberFormat(this.currentLanguage === 'ar' ? 'ar-EG' : 'en-US').format(number);
    },
    
    // Format currency according to current language
    formatCurrency(amount, currency = 'EGP') {
        return new Intl.NumberFormat(this.currentLanguage === 'ar' ? 'ar-EG' : 'en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    },
    
    // Show language change toast notification
    showLanguageToast(lang) {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;
        
        const message = lang === 'ar' ? 
            'تم تغيير اللغة إلى العربية' : 
            'Language changed to English';
        
        const toast = document.createElement('div');
        toast.className = 'toast align-items-center text-white bg-info border-0';
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');
        
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    <i class="bi bi-globe me-2"></i>
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        if (typeof bootstrap !== 'undefined') {
            const bsToast = new bootstrap.Toast(toast);
            bsToast.show();
            
            // Remove toast after it's hidden
            toast.addEventListener('hidden.bs.toast', () => {
                toast.remove();
            });
        }
    }
};

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    LanguageSystem.init();
});

// Export for global access
window.LanguageSystem = LanguageSystem;
