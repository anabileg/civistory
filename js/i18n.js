const i18n = {
    // اللغات الثلاث كبداية (يمكنك زيادتها لـ 86 بنفس النمط)
    languages: [
        { code: 'ar', name: 'عربي', flag: 'https://flagcdn.com/w40/eg.png' },
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
        { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' }
    ],

    async loadLanguage(langCode) {
        try {
            const response = await fetch(`./locales/${langCode}/translation.json`);
            if (!response.ok) throw new Error();
            const data = await response.json();
            
            // تحديث العلم والاسم المختار (بناءً على طلبك)
            const current = this.languages.find(l => l.code === langCode);
            document.getElementById('selected-flag').src = current.flag;
            document.getElementById('selected-lang-name').textContent = current.name;
            
            // تحديث اتجاه الصفحة
            document.documentElement.dir = (langCode === 'ar') ? 'rtl' : 'ltr';
            
            console.log("تم تحديث اللغة إلى:", current.name);
        } catch (e) {
            console.error("خطأ: تأكد من مسار locales/" + langCode + "/translation.json");
        }
    },

    render() {
        const list = document.getElementById('lang-list');
        this.languages.forEach(l => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${l.name}</span> <img src="${l.flag}">`;
            li.onclick = (e) => {
                e.stopPropagation();
                this.loadLanguage(l.code);
                document.getElementById('lang-list').classList.remove('show');
            };
            list.appendChild(li);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    i18n.render();
    
    const btn = document.getElementById('lang-btn');
    const dropdown = document.getElementById('lang-list');
    
    btn.onclick = (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    };
    
    window.onclick = () => dropdown.classList.remove('show');
});
