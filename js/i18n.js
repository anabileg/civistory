const i18n = {
    languages: [
        { code: 'ar', name: 'عربي', flag: 'https://flagcdn.com/w20/eg.png' },
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
        { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' }
        // سأقوم بإضافة الـ 86 لغة لك لاحقاً
    ],

    async loadLanguage(lang) {
        try {
            // استدعاء ملف الترجمة من المجلد المستقل
            const response = await fetch(`./locales/${lang}/translation.json`);
            if (!response.ok) throw new Error();
            const data = await response.json();
            this.apply(data, lang);
        } catch (e) { console.error("Error loading language: " + lang); }
    },

    apply(data, lang) {
        // ترجمة العناصر التي بها data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) el.innerHTML = data[key];
        });

        // تحديث شريط الأخبار
        const ticker = document.getElementById('tickerTrack');
        if (data.news) {
            ticker.innerHTML = data.news.map(n => `<span>• ${n}</span>`).join('');
            ticker.innerHTML += ticker.innerHTML; 
        }

        // تحديث الفيديو والرابط
        if(data.videoUrl) document.getElementById('mainVideo').src = data.videoUrl;
        if(data.bookLink) document.getElementById('bookBtn').href = data.bookLink;

        // ضبط اتجاه الموقع
        const rtlLangs = ['ar', 'fa', 'ur', 'he', 'sd'];
        document.documentElement.dir = rtlLangs.includes(lang) ? 'rtl' : 'ltr';
        
        // تحديث شكل العلم في الهيدر
        const selLang = this.languages.find(l => l.code === lang);
        document.getElementById('selected-flag').src = selLang.flag;
        document.getElementById('selected-lang-name').textContent = selLang.name;
    },

    render() {
        const list = document.getElementById('lang-list');
        this.languages.forEach(l => {
            const li = document.createElement('li');
            li.style.cssText = "padding:10px; cursor:pointer; border-bottom:1px solid #eee; display:flex; align-items:center; gap:10px;";
            li.innerHTML = `<img src="${l.flag}" width="20"> <span>${l.name}</span>`;
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
    i18n.loadLanguage('ar'); // البدء بالعربي
    document.getElementById('lang-btn').onclick = (e) => {
        e.stopPropagation();
        document.getElementById('lang-dropdown-list').classList.toggle('show');
    };
    window.onclick = () => document.getElementById('lang-dropdown-list').classList.remove('show');
});
