/**
 * NursingIQ Chatbot - Intelligent Nursing Assistant
 * Handles chat functionality, message persistence, and AI responses
 * 
 * @author NursingIQ Team
 * @version 1.0.0
 */

class NursingChatbot {
    constructor() {
        this.messages = [];
        this.isTyping = false;
        this.storageKey = 'nursingiq-chat-history';
        this.init();
    }

    /**
     * Initialize the chatbot
     */
    init() {
        this.loadChatHistory();
        this.renderMessages();
        this.addWelcomeMessage();
        this.setupEventListeners();
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Message input handling
        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }

        // Send button
        const sendButton = document.querySelector('.chat-input-container .btn');
        if (sendButton) {
            sendButton.addEventListener('click', () => this.sendMessage());
        }
    }

    /**
     * Add welcome message
     */
    addWelcomeMessage() {
        if (this.messages.length === 0) {
            const welcomeMessage = {
                id: Date.now(),
                type: 'bot',
                content: 'مرحباً! أنا مساعد التمريض الذكي 🤖\n\nيمكنني مساعدتك في:\n• نصائح المذاكرة والدراسة\n• معلومات عن المواد الدراسية\n• نصائح التدريب العملي\n• التحضير للامتحانات\n• مهارات التمريض الأساسية\n\nكيف يمكنني مساعدتك اليوم؟',
                timestamp: new Date()
            };
            this.messages.push(welcomeMessage);
            this.renderMessages();
        }
    }

    /**
     * Send a message
     */
    sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();

        if (!message || this.isTyping) return;

        // Add user message
        this.addMessage(message, 'user');
        messageInput.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Simulate bot response
        setTimeout(() => {
            this.hideTypingIndicator();
            const botResponse = this.generateBotResponse(message);
            this.addMessage(botResponse, 'bot');
        }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
    }

    /**
     * Add a message to the chat
     * @param {string} content - Message content
     * @param {string} type - Message type ('user' or 'bot')
     */
    addMessage(content, type) {
        const message = {
            id: Date.now() + Math.random(),
            type: type,
            content: content,
            timestamp: new Date()
        };

        this.messages.push(message);
        this.renderMessages();
        this.saveChatHistory();
        this.scrollToBottom();
    }

    /**
     * Generate bot response based on user message
     * @param {string} userMessage - User's message
     * @returns {string} Bot response
     */
    generateBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Study tips
        if (lowerMessage.includes('كيف اذاكر') || lowerMessage.includes('مذاكرة') || lowerMessage.includes('دراسة')) {
            return this.getStudyTips();
        }

        // Anatomy
        if (lowerMessage.includes('تشريح') || lowerMessage.includes('anatomy')) {
            return this.getAnatomyTips();
        }

        // Practical training
        if (lowerMessage.includes('تدريب') || lowerMessage.includes('عملي') || lowerMessage.includes('practical')) {
            return this.getPracticalTips();
        }

        // Exams
        if (lowerMessage.includes('امتحان') || lowerMessage.includes('اختبار') || lowerMessage.includes('exam')) {
            return this.getExamTips();
        }

        // Nursing skills
        if (lowerMessage.includes('مهارة') || lowerMessage.includes('skill') || lowerMessage.includes('تمريض')) {
            return this.getNursingSkills();
        }

        // Greeting
        if (lowerMessage.includes('مرحبا') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return 'مرحباً! كيف يمكنني مساعدتك في مجال التمريض؟ 😊';
        }

        // Default response
        return this.getDefaultResponse();
    }

    /**
     * Get study tips
     * @returns {string} Study tips response
     */
    getStudyTips() {
        const tips = [
            '📚 **نصائح المذاكرة الفعالة:**\n\n',
            '1️⃣ **قسّم المادة لأجزاء صغيرة** - لا تحاول حفظ كل شيء مرة واحدة\n',
            '2️⃣ **استخدم الخرائط الذهنية** - تساعد في ربط المعلومات\n',
            '3️⃣ **المراجعة المستمرة** - راجع ما درسته كل يوم\n',
            '4️⃣ **حل الاختبارات** - اختبر نفسك بانتظام\n',
            '5️⃣ **خذ فترات راحة** - لا تذاكر لأكثر من 45 دقيقة متواصلة\n',
            '6️⃣ **استخدم الألوان والرسوم** - تجعل المعلومات أكثر وضوحاً\n\n',
            '💡 **نصيحة:** ابدأ بالمواد الصعبة أولاً عندما يكون عقلك في أفضل حالاته!'
        ];
        return tips.join('');
    }

    /**
     * Get anatomy tips
     * @returns {string} Anatomy tips response
     */
    getAnatomyTips() {
        const tips = [
            '🫀 **نصائح لدراسة التشريح:**\n\n',
            '1️⃣ **فهم العلاقات المكانية** - ركز على موقع كل عضو\n',
            '2️⃣ **استخدم الرسوم التوضيحية** - الصور أفضل من النصوص\n',
            '3️⃣ **ادرس بالترتيب المنطقي** - من الكبير إلى الصغير\n',
            '4️⃣ **ربط التشريح بالوظيفة** - لماذا هذا الشكل؟\n',
            '5️⃣ **استخدم النماذج ثلاثية الأبعاد** - إذا كانت متوفرة\n',
            '6️⃣ **تدرب على الرسم** - رسم الأعضاء يساعد في الحفظ\n\n',
            '🔬 **أدوات مفيدة:** تطبيقات التشريح التفاعلية، الفيديوهات التعليمية، النماذج البلاستيكية'
        ];
        return tips.join('');
    }

    /**
     * Get practical training tips
     * @returns {string} Practical training tips response
     */
    getPracticalTips() {
        const tips = [
            '🏥 **نصائح التدريب العملي:**\n\n',
            '1️⃣ **كن مستعداً نفسياً** - التدريب العملي قد يكون مرهقاً\n',
            '2️⃣ **اطرح الأسئلة** - لا تخجل من السؤال عن أي شيء\n',
            '3️⃣ **سجل ملاحظاتك** - اكتب كل ما تتعلمه\n',
            '4️⃣ **تعلم من الأخطاء** - الأخطاء جزء من التعلم\n',
            '5️⃣ **كن محترماً** - احترم المرضى والطاقم الطبي\n',
            '6️⃣ **تدرب على المهارات الأساسية** - الحقن، قياس الضغط، إلخ\n\n',
            '💪 **تذكر:** التدريب العملي هو أفضل طريقة لتعلم التمريض!'
        ];
        return tips.join('');
    }

    /**
     * Get exam preparation tips
     * @returns {string} Exam tips response
     */
    getExamTips() {
        const tips = [
            '📝 **نصائح التحضير للامتحانات:**\n\n',
            '1️⃣ **ابدأ مبكراً** - لا تؤجل الدراسة للآخر\n',
            '2️⃣ **راجع الاختبارات السابقة** - تعرف على نمط الأسئلة\n',
            '3️⃣ **نم جيداً** - النوم مهم للذاكرة\n',
            '4️⃣ **تناول وجبة صحية** - قبل الامتحان\n',
            '5️⃣ **اقرأ الأسئلة بعناية** - لا تتسرع في الإجابة\n',
            '6️⃣ **راجع إجاباتك** - إذا كان الوقت يسمح\n\n',
            '🎯 **نصيحة:** ركز على فهم المفاهيم بدلاً من الحفظ فقط!'
        ];
        return tips.join('');
    }

    /**
     * Get nursing skills tips
     * @returns {string} Nursing skills response
     */
    getNursingSkills() {
        const skills = [
            '👩‍⚕️ **المهارات الأساسية للتمريض:**\n\n',
            '🔹 **مهارات التواصل** - التحدث مع المرضى والعائلات\n',
            '🔹 **مهارات المراقبة** - مراقبة العلامات الحيوية\n',
            '🔹 **مهارات الحقن** - الحقن العضلي والوريدي\n',
            '🔹 **مهارات التضميد** - تغيير الضمادات\n',
            '🔹 **مهارات القياس** - ضغط الدم، درجة الحرارة، النبض\n',
            '🔹 **مهارات الإسعافات الأولية** - التعامل مع الحالات الطارئة\n',
            '🔹 **مهارات التوثيق** - تسجيل الملاحظات بدقة\n\n',
            '🌟 **تذكر:** الممارسة تجعل المهارات مثالية!'
        ];
        return skills.join('');
    }

    /**
     * Get default response
     * @returns {string} Default response
     */
    getDefaultResponse() {
        const responses = [
            'شكراً لسؤالك! يمكنني مساعدتك في:\n\n',
            '📚 **نصائح المذاكرة والدراسة**\n',
            '🫀 **معلومات عن مادة التشريح**\n',
            '🏥 **نصائح التدريب العملي**\n',
            '📝 **التحضير للامتحانات**\n',
            '👩‍⚕️ **مهارات التمريض الأساسية**\n\n',
            'ما الذي تريد معرفته أكثر؟'
        ];
        return responses.join('');
    }

    /**
     * Render all messages
     */
    renderMessages() {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) return;

        chatMessages.innerHTML = '';

        this.messages.forEach(message => {
            const messageElement = this.createMessageElement(message);
            chatMessages.appendChild(messageElement);
        });
    }

    /**
     * Create a message element
     * @param {Object} message - Message object
     * @returns {HTMLElement} Message element
     */
    createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.type}`;
        messageDiv.setAttribute('data-message-id', message.id);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = this.formatMessageContent(message.content);

        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = this.formatTime(message.timestamp);

        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timeDiv);

        return messageDiv;
    }

    /**
     * Format message content (handle line breaks and formatting)
     * @param {string} content - Message content
     * @returns {string} Formatted content
     */
    formatMessageContent(content) {
        return content
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    /**
     * Format timestamp
     * @param {Date} timestamp - Message timestamp
     * @returns {string} Formatted time
     */
    formatTime(timestamp) {
        const now = new Date();
        const messageTime = new Date(timestamp);
        const diffInMinutes = Math.floor((now - messageTime) / (1000 * 60));

        if (diffInMinutes < 1) {
            return 'الآن';
        } else if (diffInMinutes < 60) {
            return `منذ ${diffInMinutes} دقيقة`;
        } else if (diffInMinutes < 1440) {
            const hours = Math.floor(diffInMinutes / 60);
            return `منذ ${hours} ساعة`;
        } else {
            return messageTime.toLocaleDateString('ar-EG');
        }
    }

    /**
     * Show typing indicator
     */
    showTypingIndicator() {
        this.isTyping = true;
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.style.display = 'flex';
        }
        this.scrollToBottom();
    }

    /**
     * Hide typing indicator
     */
    hideTypingIndicator() {
        this.isTyping = false;
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.style.display = 'none';
        }
    }

    /**
     * Scroll to bottom of chat
     */
    scrollToBottom() {
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
            setTimeout(() => {
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 100);
        }
    }

    /**
     * Save chat history to localStorage
     */
    saveChatHistory() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.messages));
        } catch (error) {
            console.warn('Failed to save chat history:', error);
        }
    }

    /**
     * Load chat history from localStorage
     */
    loadChatHistory() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (saved) {
                this.messages = JSON.parse(saved).map(msg => ({
                    ...msg,
                    timestamp: new Date(msg.timestamp)
                }));
            }
        } catch (error) {
            console.warn('Failed to load chat history:', error);
            this.messages = [];
        }
    }

    /**
     * Clear chat history
     */
    clearChat() {
        if (confirm('هل أنت متأكد من مسح المحادثة؟')) {
            this.messages = [];
            this.renderMessages();
            this.addWelcomeMessage();
            localStorage.removeItem(this.storageKey);
        }
    }

    /**
     * Export chat history
     */
    exportChat() {
        const chatText = this.messages.map(msg => {
            const time = this.formatTime(msg.timestamp);
            const sender = msg.type === 'user' ? 'أنت' : 'المساعد';
            return `[${time}] ${sender}: ${msg.content}`;
        }).join('\n\n');

        const blob = new Blob([chatText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `nursingiq-chat-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Global functions for HTML onclick handlers
function sendMessage() {
    if (window.chatbot) {
        window.chatbot.sendMessage();
    }
}

function handleMessageKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function sendQuickMessage(message) {
    if (window.chatbot) {
        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            messageInput.value = message;
            window.chatbot.sendMessage();
        }
    }
}

function clearChat() {
    if (window.chatbot) {
        window.chatbot.clearChat();
    }
}

function exportChat() {
    if (window.chatbot) {
        window.chatbot.exportChat();
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.chatbot = new NursingChatbot();
});
