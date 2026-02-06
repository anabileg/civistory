const i18n = {
    languages: [
        { code: 'ar', name: 'عربي', flag: 'https://flagcdn.com/w40/eg.png' },
        { code: 'en', name: 'انجليزي', flag: 'https://flagcdn.com/w40/gb.png' },
        { code: 'fr', name: 'فرنسا', flag: 'https://flagcdn.com/w40/fr.png' },
        { code: 'es', name: 'إسبانيا', flag: 'https://flagcdn.com/w40/es.png' },
        { code: 'de', name: 'ألمانيا', flag: 'https://flagcdn.com/w40/de.png' },
        { code: 'it', name: 'إيطاليا', flag: 'https://flagcdn.com/w40/it.png' },
        { code: 'pt', name: 'البرتغال', flag: 'https://flagcdn.com/w40/pt.png' },
        { code: 'tr', name: 'تركيا', flag: 'https://flagcdn.com/w40/tr.png' },
        { code: 'el', name: 'اليونان', flag: 'https://flagcdn.com/w40/gr.png' },
        { code: 'nl', name: 'هولندا', flag: 'https://flagcdn.com/w40/nl.png' },
        { code: 'ro', name: 'رومانيا', flag: 'https://flagcdn.com/w40/ro.png' },
        { code: 'sv', name: 'سويدي', flag: 'https://flagcdn.com/w40/se.png' },
        { code: 'pl', name: 'بولندي', flag: 'https://flagcdn.com/w40/pl.png' },
        { code: 'fi', name: 'فنلندي', flag: 'https://flagcdn.com/w40/fi.png' },
        { code: 'da', name: 'دنمركي', flag: 'https://flagcdn.com/w40/dk.png' },
        { code: 'no', name: 'نرويجي', flag: 'https://flagcdn.com/w40/no.png' },
        { code: 'hu', name: 'المجر', flag: 'https://flagcdn.com/w40/hu.png' },
        { code: 'sk', name: 'السلوفاكية', flag: 'https://flagcdn.com/w40/sk.png' },
        { code: 'hr', name: 'كرواتيا', flag: 'https://flagcdn.com/w40/hr.png' },
        { code: 'sl', name: 'السلوفينية', flag: 'https://flagcdn.com/w40/si.png' },
        { code: 'bg', name: 'بلغاريا', flag: 'https://flagcdn.com/w40/bg.png' },
        { code: 'sr', name: 'الصربية', flag: 'https://flagcdn.com/w40/rs.png' },
        { code: 'cs', name: 'تشيك', flag: 'https://flagcdn.com/w40/cz.png' },
        { code: 'ru', name: 'روسيا', flag: 'https://flagcdn.com/w40/ru.png' },
        { code: 'uk', name: 'أوكرانيا', flag: 'https://flagcdn.com/w40/ua.png' },
        { code: 'zh', name: 'الصين - 普通话', flag: 'https://flagcdn.com/w40/cn.png' },
        { code: 'yue', name: 'الصين - 广东话', flag: 'https://flagcdn.com/w40/hk.png' },
        { code: 'ja', name: 'اليابان', flag: 'https://flagcdn.com/w40/jp.png' },
        { code: 'ko', name: 'كوريا الجنوبية', flag: 'https://flagcdn.com/w40/kr.png' },
        { code: 'hi', name: 'الهند - हिन्दी', flag: 'https://flagcdn.com/w40/in.png' },
        { code: 'te', name: 'الهند - తెలుగు', flag: 'https://flagcdn.com/w40/in.png' },
        { code: 'mr', name: 'الهند - मराठी', flag: 'https://flagcdn.com/w40/in.png' },
        { code: 'ta', name: 'الهند - தமிழ்', flag: 'https://flagcdn.com/w40/in.png' },
        { code: 'ur', name: 'الهند/اردو', flag: 'https://flagcdn.com/w40/pk.png' },
        { code: 'gu', name: 'الهند - ગુજરાતી', flag: 'https://flagcdn.com/w40/in.png' },
        { code: 'kn', name: 'الهند - ಕನ್ನಡ', flag: 'https://flagcdn.com/w40/in.png' },
        { code: 'ml', name: 'الهند - മലയാളം', flag: 'https://flagcdn.com/w40/in.png' },
        { code: 'or', name: 'الهند - ଓଡ଼ିଆ', flag: 'https://flagcdn.com/w40/in.png' },
        { code: 'pa', name: 'باكستان - پنجابی', flag: 'https://flagcdn.com/w40/pk.png' },
        { code: 'sd', name: 'باكستان - سنڌي', flag: 'https://flagcdn.com/w40/pk.png' },
        { code: 'ps', name: 'باكستان - پښتو', flag: 'https://flagcdn.com/w40/pk.png' },
        { code: 'bal', name: 'باكستان - بلوچی', flag: 'https://flagcdn.com/w40/pk.png' },
        { code: 'si-lk', name: 'سريلانكا - සිංහල', flag: 'https://flagcdn.com/w40/lk.png' },
        { code: 'bn', name: 'بنجلاديش - বাংলা', flag: 'https://flagcdn.com/w40/bd.png' },
        { code: 'zh-sg', name: 'سنغافورة - 中文', flag: 'https://flagcdn.com/w40/sg.png' },
        { code: 'ms', name: 'سنغافورة - Bahasa Melayu', flag: 'https://flagcdn.com/w40/sg.png' },
        { code: 'id', name: 'إندونيسيا - Bahasa Indonesia', flag: 'https://flagcdn.com/w40/id.png' },
        { code: 'jv', name: 'إندونيسيا - Jawa', flag: 'https://flagcdn.com/w40/id.png' },
        { code: 'su', name: 'إندونيسيا - Sunda', flag: 'https://flagcdn.com/w40/id.png' },
        { code: 'bbc', name: 'إندونيسيا - Batak', flag: 'https://flagcdn.com/w40/id.png' },
        { code: 'my', name: 'میانمار - ဗမာစာ', flag: 'https://flagcdn.com/w40/mm.png' },
        { code: 'kar', name: 'ميانمار - ကရင်စာ', flag: 'https://flagcdn.com/w40/mm.png' },
        { code: 'rhg', name: 'ميانمار - لغة الراخين', flag: 'https://flagcdn.com/w40/mm.png' },
        { code: 'mnw', name: 'ميانمار - اللغة المونية', flag: 'https://flagcdn.com/w40/mm.png' },
        { code: 'shn', name: 'ميانمار - اللغة الشانية', flag: 'https://flagcdn.com/w40/mm.png' },
        { code: 'ku', name: 'الكردية', flag: 'https://flagcdn.com/w40/iq.png' },
        { code: 'az', name: 'الأذربيجانية', flag: 'https://flagcdn.com/w40/az.png' },
        { code: 'uz', name: 'الأوزبكية', flag: 'https://flagcdn.com/w40/uz.png' },
        { code: 'kk', name: 'الكازاخية', flag: 'https://flagcdn.com/w40/kz.png' },
        { code: 'tl', name: 'الفلبين', flag: 'https://flagcdn.com/w40/ph.png' },
        { code: 'th', name: 'تايلاند', flag: 'https://flagcdn.com/w40/th.png' },
        { code: 'vi', name: 'فيتنام', flag: 'https://flagcdn.com/w40/vn.png' },
        { code: 'fa', name: 'إيران', flag: 'https://flagcdn.com/w40/ir.png' },
        { code: 'yo', name: 'نيجيريا - Yorùbá', flag: 'https://flagcdn.com/w40/ng.png' },
        { code: 'am', name: 'إثيوبيا - አማርኛ', flag: 'https://flagcdn.com/w40/et.png' },
        { code: 'sw', name: 'تنزانيا - Kiswahili', flag: 'https://flagcdn.com/w40/tz.png' },
        { code: 'sw-ke', name: 'كينيا', flag: 'https://flagcdn.com/w40/ke.png' },
        { code: 'ln', name: 'الكونغو - Lingála', flag: 'https://flagcdn.com/w40/cd.png' },
        { code: 'zu', name: 'جنوب أفريقيا - isiZulu', flag: 'https://flagcdn.com/w40/za.png' },
        { code: 'lg', name: 'أوغندا - Luganda', flag: 'https://flagcdn.com/w40/ug.png' },
        { code: 'ak', name: 'غانا - Akan', flag: 'https://flagcdn.com/w40/gh.png' },
        { code: 'ff', name: 'الكاميرون - Fula', flag: 'https://flagcdn.com/w40/cm.png' },
        { code: 'dyu', name: 'ساحل العاج - Dioula', flag: 'https://flagcdn.com/w40/ci.png' },
        { code: 'mg', name: 'مدغشقر - Malagasy', flag: 'https://flagcdn.com/w40/mg.png' },
        { code: 'din', name: 'السودان - Dinka', flag: 'https://flagcdn.com/w40/sd.png' },
        { code: 'srr', name: 'تشاد - Sara', flag: 'https://flagcdn.com/w40/td.png' },
        { code: 'so', name: 'الصومال - Soomaali', flag: 'https://flagcdn.com/w40/so.png' },
        { code: 'sn', name: 'زيمبابوي - Shona', flag: 'https://flagcdn.com/w40/zw.png' },
        { code: 'bem', name: 'زامبيا - Bemba', flag: 'https://flagcdn.com/w40/zm.png' },
        { code: 'ny', name: 'مالاوي - Chichewa', flag: 'https://flagcdn.com/w40/mw.png' },
        { code: 'wo', name: 'السنغال - Wolof', flag: 'https://flagcdn.com/w40/sn.png' },
        { code: 'bm', name: 'مالي - Bambara', flag: 'https://flagcdn.com/w40/ml.png' },
        { code: 'ha', name: 'النيجر - Hausa', flag: 'https://flagcdn.com/w40/ne.png' },
        { code: 'mos', name: 'بوركينا فاسو - Mossi', flag: 'https://flagcdn.com/w40/bf.png' },
        { code: 'rw', name: 'رواندا - Kinyarwanda', flag: 'https://flagcdn.com/w40/rw.png' },
        { code: 'rn', name: 'بوروندي - Kirundi', flag: 'https://flagcdn.com/w40/bi.png' }
    ],

    async loadLanguage(langCode) {
        try {
            const response = await fetch(`./locales/${langCode}/translation.json`);
            if (!response.ok) throw new Error();
            const data = await response.json();
            
            const current = this.languages.find(l => l.code === langCode);
            document.getElementById('selected-flag').src = current.flag;
            document.documentElement.dir = (['ar', 'fa', 'ur', 'ps', 'sd', 'ku'].includes(langCode)) ? 'rtl' : 'ltr';

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
        } catch (e) {
            const current = this.languages.find(l => l.code === langCode);
            document.getElementById('selected-flag').src = current.flag;
        }
    },

    render() {
        const list = document.getElementById('lang-list');
        list.innerHTML = '';
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
    const dropdownList = document.getElementById('lang-list');
    
    if(btn) {
        btn.onclick = (e) => {
            e.stopPropagation();
            dropdownList.classList.toggle('show');
        };
    }
    window.onclick = () => { if(dropdownList) dropdownList.classList.remove('show'); };
    i18n.loadLanguage('ar');
});
