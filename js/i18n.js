const i18n = {
    languages: [
        { code: 'ar', name: 'عربي', flag: 'https://flagcdn.com/w20/eg.png' },
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
        { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
        { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w20/es.png' }
        // يمكنك إضافة باقي اللغات هنا بنفس الطريقة
    ],

    async loadLanguage(lang) {
        try {
            const response = await fetch(`./locales/${lang}/translation.json`);
            const data = await response.json();
            this.apply(data, lang);
        } catch (e) {
            console.error("خطأ: تأكد من وجود المجلد locales ثم مجلد " + lang + " وبداخله ملف translation.json");
        }
    },

    apply(data, lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) el.innerHTML = data[key];
        });
        const ticker = document.getElementById('tickerTrack');
        if (data.news && ticker) {
            ticker.innerHTML = data.news.map(n => `<span>• ${n}</span>`).join('');
            ticker.innerHTML += ticker.innerHTML; 
        }
        if(data.videoUrl) document.getElementById('mainVideo').src = data.videoUrl;
        if(data.bookLink) document.getElementById('bookBtn').href = data.bookLink;
        document.documentElement.dir = ['ar', 'fa', 'ur'].includes(lang) ? 'rtl' : 'ltr';
        const selLang = this.languages.find(l => l.code === lang) || this.languages[0];
        document.getElementById('selected-flag').src = selLang.flag;
        document.getElementById('selected-lang-name').textContent = selLang.name;
    },

    render() {
        const list = document.getElementById('lang-list');
        this.languages.forEach(l => {
            const li = document.createElement('li');
            li.style.cssText = "padding:10px; cursor:pointer; display:flex; align-items:center; gap:10px; border-bottom:1px solid #eee;";
            li.innerHTML = `<img src="${l.flag}" width="20"> <span>${l.name}</span>`;
            li.onclick = () => { this.loadLanguage(l.code); document.getElementById('lang-dropdown-list').classList.remove('show'); };
            list.appendChild(li);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    i18n.render();
    i18n.loadLanguage('ar');
    document.getElementById('lang-btn').onclick = (e) => {
        e.stopPropagation();
        document.getElementById('lang-dropdown-list').classList.toggle('show');
    };
});
