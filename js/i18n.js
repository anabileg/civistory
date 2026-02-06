const i18n = {
    currentLanguage: 'ar',
    // القائمة الكاملة والنهائية (86 لغة) بناءً على قائمتك بدقة متناهية
    languages: [
        { code: 'ar', name: 'عربي', flag: 'https://flagcdn.com/w20/eg.png' },
        { code: 'en', name: 'انجليزي', flag: 'https://flagcdn.com/w20/gb.png' },
        { code: 'fr', name: 'فرنسا', flag: 'https://flagcdn.com/w20/fr.png' },
        { code: 'es', name: 'إسبانيا', flag: 'https://flagcdn.com/w20/es.png' },
        { code: 'de', name: 'ألمانيا', flag: 'https://flagcdn.com/w20/de.png' },
        { code: 'it', name: 'إيطاليا', flag: 'https://flagcdn.com/w20/it.png' },
        { code: 'pt', name: 'البرتغال', flag: 'https://flagcdn.com/w20/pt.png' },
        { code: 'tr', name: 'تركيا', flag: 'https://flagcdn.com/w20/tr.png' },
        { code: 'el', name: 'اليونان', flag: 'https://flagcdn.com/w20/gr.png' },
        { code: 'nl', name: 'هولندا', flag: 'https://flagcdn.com/w20/nl.png' },
        { code: 'ro', name: 'رومانيا', flag: 'https://flagcdn.com/w20/ro.png' },
        { code: 'sv', name: 'سويدي', flag: 'https://flagcdn.com/w20/se.png' },
        { code: 'pl', name: 'بولندي', flag: 'https://flagcdn.com/w20/pl.png' },
        { code: 'fi', name: 'فنلندي', flag: 'https://flagcdn.com/w20/fi.png' },
        { code: 'da', name: 'دنمركي', flag: 'https://flagcdn.com/w20/dk.png' },
        { code: 'no', name: 'نرويجي', flag: 'https://flagcdn.com/w20/no.png' },
        { code: 'hu', name: 'المجر', flag: 'https://flagcdn.com/w20/hu.png' },
        { code: 'sk', name: 'السلوفاكية', flag: 'https://flagcdn.com/w20/sk.png' },
        { code: 'hr', name: 'كرواتيا', flag: 'https://flagcdn.com/w20/hr.png' },
        { code: 'sl', name: 'السلوفينية', flag: 'https://flagcdn.com/w20/si.png' },
        { code: 'bg', name: 'بلغاريا', flag: 'https://flagcdn.com/w20/bg.png' },
        { code: 'sr', name: 'الصربية', flag: 'https://flagcdn.com/w20/rs.png' },
        { code: 'cs', name: 'تشيك', flag: 'https://flagcdn.com/w20/cz.png' },
        { code: 'ru', name: 'روسيا', flag: 'https://flagcdn.com/w20/ru.png' },
        { code: 'uk', name: 'أوكرانيا', flag: 'https://flagcdn.com/w20/ua.png' },
        { code: 'zh', name: 'الصين - اللغة الرسمية', flag: 'https://flagcdn.com/w20/cn.png' },
        { code: 'yue', name: 'الصين - الكانتونية', flag: 'https://flagcdn.com/w20/hk.png' },
        { code: 'ja', name: 'اليابان', flag: 'https://flagcdn.com/w20/jp.png' },
        { code: 'ko', name: 'كوريا الجنوبية', flag: 'https://flagcdn.com/w20/kr.png' },
        { code: 'hi', name: 'الهند - هندي', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'te', name: 'الهند - تيلوجو', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'mr', name: 'الهند - ماراتية', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'ta', name: 'الهند - تاميلية', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'ur', name: 'الهند - أردو', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'gu', name: 'الهند - غوجاراتية', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'kn', name: 'الهند - كانادا', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'ml', name: 'الهند - مالايالامية', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'or', name: 'الهند - أوريا', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'pa', name: 'باكستان - بنجابية', flag: 'https://flagcdn.com/w20/pk.png' },
        { code: 'sd', name: 'باكستان - سندهي', flag: 'https://flagcdn.com/w20/pk.png' },
        { code: 'ps', name: 'باكستان - بشتو', flag: 'https://flagcdn.com/w20/pk.png' },
        { code: 'bal', name: 'باكستان - بلوشية', flag: 'https://flagcdn.com/w20/pk.png' },
        { code: 'si', name: 'سريلانكا - سنهالية', flag: 'https://flagcdn.com/w20/lk.png' },
        { code: 'bn', name: 'بنجلاديش - بنغالية', flag: 'https://flagcdn.com/w20/bd.png' },
        { code: 'zh-sg', name: 'سنغافورة - صيني', flag: 'https://flagcdn.com/w20/sg.png' },
        { code: 'ms', name: 'سنغافورة - مالايو', flag: 'https://flagcdn.com/w20/sg.png' },
        { code: 'id', name: 'إندونيسيا - اللغة الرسمية', flag: 'https://flagcdn.com/w20/id.png' },
        { code: 'jv', name: 'إندونيسيا - جاوية', flag: 'https://flagcdn.com/w20/id.png' },
        { code: 'su', name: 'إندونيسيا - سوندا', flag: 'https://flagcdn.com/w20/id.png' },
        { code: 'bbc', name: 'إندونيسيا - باتاكية', flag: 'https://flagcdn.com/w20/id.png' },
        { code: 'my', name: 'ميانمار - بورمية', flag: 'https://flagcdn.com/w20/mm.png' },
        { code: 'kar', name: 'ميانمار - كارينية', flag: 'https://flagcdn.com/w20/mm.png' },
        { code: 'rhg', name: 'ميانمار - روهينجا', flag: 'https://flagcdn.com/w20/mm.png' },
        { code: 'mnw', name: 'ميانمار - مونية', flag: 'https://flagcdn.com/w20/mm.png' },
        { code: 'shn', name: 'ميانمار - شانية', flag: 'https://flagcdn.com/w20/mm.png' },
        { code: 'ku', name: 'الكردية', flag: 'https://flagcdn.com/w20/iq.png' },
        { code: 'az', name: 'الأذربيجانية', flag: 'https://flagcdn.com/w20/az.png' },
        { code: 'uz', name: 'الأوزبكية', flag: 'https://flagcdn.com/w20/uz.png' },
        { code: 'kk', name: 'الكازاخية', flag: 'https://flagcdn.com/w20/kz.png' },
        { code: 'tl', name: 'الفلبين', flag: 'https://flagcdn.com/w20/ph.png' },
        { code: 'th', name: 'تايلاند', flag: 'https://flagcdn.com/w20/th.png' },
        { code: 'vi', name: 'فيتنام', flag: 'https://flagcdn.com/w20/vn.png' },
        { code: 'fa', name: 'إيران', flag: 'https://flagcdn.com/w20/ir.png' },
        { code: 'yo', name: 'نيجيريا - يوروبا', flag: 'https://flagcdn.com/w20/ng.png' },
        { code: 'am', name: 'إثيوبيا - أمهرية', flag: 'https://flagcdn.com/w20/et.png' },
        { code: 'sw', name: 'تنزانيا - سواحيلية', flag: 'https://flagcdn.com/w20/tz.png' },
        { code: 'sw-ke', name: 'كينيا - سواحيلية', flag: 'https://flagcdn.com/w20/ke.png' },
        { code: 'ln', name: 'الكونغو - لينجالا', flag: 'https://flagcdn.com/w20/cd.png' },
        { code: 'zu', name: 'جنوب أفريقيا - زولو', flag: 'https://flagcdn.com/w20/za.png' },
        { code: 'lg', name: 'أوغندا - لوغاندا', flag: 'https://flagcdn.com/w20/ug.png' },
        { code: 'ak', name: 'غانا - أكان', flag: 'https://flagcdn.com/w20/gh.png' },
        { code: 'ff', name: 'الكاميرون - فولا', flag: 'https://flagcdn.com/w20/cm.png' },
        { code: 'dyu', name: 'ساحل العاج - ديولا', flag: 'https://flagcdn.com/w20/ci.png' },
        { code: 'mg', name: 'مدغشقر', flag: 'https://flagcdn.com/w20/mg.png' },
        { code: 'din', name: 'السودان - دنكا', flag: 'https://flagcdn.com/w20/sd.png' },
        { code: 'srr', name: 'تشاد - سارا', flag: 'https://flagcdn.com/w20/td.png' },
        { code: 'so', name: 'الصومال', flag: 'https://flagcdn.com/w20/so.png' },
        { code: 'sn', name: 'زيمبابوي - شونا', flag: 'https://flagcdn.com/w20/zw.png' },
        { code: 'bem', name: 'زامبيا - بيمبا', flag: 'https://flagcdn.com/w20/zm.png' },
        { code: 'ny', name: 'مالاوي - شيشيوا', flag: 'https://flagcdn.com/w20/mw.png' },
        { code: 'wo', name: 'السنغال - ولوف', flag: 'https://flagcdn.com/w20/sn.png' },
        { code: 'bm', name: 'مالي - بامبارا', flag: 'https://flagcdn.com/w20/ml.png' },
        { code: 'ha', name: 'النيجر - هوسا', flag: 'https://flagcdn.com/w20/ne.png' },
        { code: 'mos', name: 'بوركينا فاسو - موسي', flag: 'https://flagcdn.com/w20/bf.png' },
        { code: 'rw', name: 'رواندا - كينيارواندا', flag: 'https://flagcdn.com/w20/rw.png' },
        { code: 'rn', name: 'بوروندي - كيروندي', flag: 'https://flagcdn.com/w20/bi.png' }
    ],

    async loadLanguage(lang) {
        const selectedLang = this.languages.find(l => l.code === lang) || this.languages[0];
        try {
            const response = await fetch(`./locales/${lang}/translation.json`);
            const translations = response.ok ? await response.json() : { "title": selectedLang.name };
            this.applyTranslations(translations);
            
            // تحديث العلم المختار في الواجهة
            const flagImg = document.getElementById('selected-flag');
            const langName = document.getElementById('selected-lang-name');
            if(flagImg) flagImg.src = selectedLang.flag;
            if(langName) langName.textContent = selectedLang.name;
            
            // ضبط اتجاه الصفحة (RTL للغات التي تكتب من اليمين)
            document.documentElement.dir = (['ar', 'ur', 'fa', 'sd', 'ps', 'ku'].includes(lang)) ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
            this.currentLanguage = lang;
            
            // إخفاء القائمة المنسدلة فوراً بعد الاختيار
            const dropdown = document.getElementById('lang-dropdown-list');
            if(dropdown) dropdown.classList.remove('show');
            
        } catch (error) {
            console.error("فشل تحميل ملف اللغة:", lang);
        }
    },

    applyTranslations(translations) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) element.textContent = translations[key];
        });
    },

    renderDropdown() {
        const list = document.getElementById('lang-list');
        if(!list) return;
        list.innerHTML = '';
        this.languages.forEach(lang => {
            const li = document.createElement('li');
            li.style.cssText = "display: flex; align-items: center; gap: 10px; padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;";
            li.innerHTML = `<img src="${lang.flag}" width="20"> <span>${lang.name}</span>`;
            li.onclick = (e) => {
                e.stopPropagation();
                this.loadLanguage(lang.code);
            };
            list.appendChild(li);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    i18n.renderDropdown();
    i18n.loadLanguage('ar'); // نبدأ بعربي - علم مصر

    const btn = document.getElementById('lang-btn');
    const dropdown = document.getElementById('lang-dropdown-list');
    
    if(btn && dropdown) {
        btn.onclick = (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        };
    }

    window.onclick = () => {
        if(dropdown) dropdown.classList.remove('show');
    };
});
