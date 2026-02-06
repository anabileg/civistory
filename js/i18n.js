const i18n = {
    languages: [
        { code: 'ar', name: 'عربي', flag: 'https://flagcdn.com/w20/eg.png' },
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
        { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' }
    ],

    async loadLanguage(langCode) {
        try {
            const response = await fetch(`./locales/${langCode}/translation.json`);
            const data = await response.json();
            
            // تحديث واجهة اللغة المختارة
            const current = this.languages.find(l => l.code === langCode);
            document.getElementById('selected-flag').src = current.flag;
            document.getElementById('selected-lang-name').textContent = current.name;
            
            // هنا سيتم وضع باقي استدعاءات النصوص لاحقاً
            console.log("تم تحميل اللغة:", langCode);
        } catch (e) {
            console.error("تأكد من وجود مجلد locales وبداخله ملف الترجمة");
        }
    },

    render() {
        const list = document.getElementById('lang-list');
        this.languages.forEach(l => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${l.flag}"> <span>${l.name}</span>`;
            li.onclick = () => {
                this.loadLanguage(l.code);
                document.getElementById('lang-dropdown-list').classList.remove('show');
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
