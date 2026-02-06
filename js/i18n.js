const i18n = {
    languages: [
        { code: 'ar', name: 'عربي', flag: 'https://flagcdn.com/w40/eg.png' },
        { code: 'en', name: 'إنجليزي', flag: 'https://flagcdn.com/w40/gb.png' },
        { code: 'fr', name: 'فرنسي', flag: 'https://flagcdn.com/w40/fr.png' },
        { code: 'es', name: 'إسباني', flag: 'https://flagcdn.com/w40/es.png' },
        { code: 'de', name: 'ألماني', flag: 'https://flagcdn.com/w40/de.png' },
        { code: 'it', name: 'إيطالي', flag: 'https://flagcdn.com/w40/it.png' },
        { code: 'ru', name: 'روسي', flag: 'https://flagcdn.com/w40/ru.png' },
        { code: 'zh', name: 'صيني', flag: 'https://flagcdn.com/w40/cn.png' },
        { code: 'ja', name: 'ياباني', flag: 'https://flagcdn.com/w40/jp.png' },
        { code: 'tr', name: 'تركي', flag: 'https://flagcdn.com/w40/tr.png' },
        { code: 'hi', name: 'هندي', flag: 'https://flagcdn.com/w40/in.png' },
        { code: 'pt', name: 'برتغالي', flag: 'https://flagcdn.com/w40/pt.png' },
        { code: 'id', name: 'إندونيسي', flag: 'https://flagcdn.com/w40/id.png' },
        { code: 'pk', name: 'أردي', flag: 'https://flagcdn.com/w40/pk.png' },
        { code: 'bn', name: 'بنجالي', flag: 'https://flagcdn.com/w40/bd.png' },
        { code: 'kr', name: 'كوري', flag: 'https://flagcdn.com/w40/kr.png' },
        { code: 'nl', name: 'هولندي', flag: 'https://flagcdn.com/w40/nl.png' },
        { code: 'pl', name: 'بولندي', flag: 'https://flagcdn.com/w40/pl.png' },
        { code: 'gr', name: 'يوناني', flag: 'https://flagcdn.com/w40/gr.png' },
        { code: 'th', name: 'تايلاندي', flag: 'https://flagcdn.com/w40/th.png' },
        { code: 'vn', name: 'فيتنامي', flag: 'https://flagcdn.com/w40/vn.png' },
        { code: 'ro', name: 'روماني', flag: 'https://flagcdn.com/w40/ro.png' },
        { code: 'hu', name: 'مجري', flag: 'https://flagcdn.com/w40/hu.png' },
        { code: 'cz', name: 'تشيكي', flag: 'https://flagcdn.com/w40/cz.png' },
        { code: 'se', name: 'سويدي', flag: 'https://flagcdn.com/w40/se.png' },
        { code: 'no', name: 'نرويجي', flag: 'https://flagcdn.com/w40/no.png' },
        { code: 'dk', name: 'دنماركي', flag: 'https://flagcdn.com/w40/dk.png' },
        { code: 'fi', name: 'فنلندي', flag: 'https://flagcdn.com/w40/fi.png' },
        { code: 'he', name: 'عبري', flag: 'https://flagcdn.com/w40/il.png' },
        { code: 'ph', name: 'فلبيني', flag: 'https://flagcdn.com/w40/ph.png' },
        { code: 'ir', name: 'فارسي', flag: 'https://flagcdn.com/w40/ir.png' },
        { code: 'my', name: 'ماليزي', flag: 'https://flagcdn.com/w40/my.png' },
        { code: 'ua', name: 'أوكراني', flag: 'https://flagcdn.com/w40/ua.png' },
        { code: 'za', name: 'أفريقاني', flag: 'https://flagcdn.com/w40/za.png' },
        { code: 'ng', name: 'هوسا', flag: 'https://flagcdn.com/w40/ng.png' },
        { code: 'et', name: 'أمهري', flag: 'https://flagcdn.com/w40/et.png' },
        { code: 'ke', name: 'سواحيلي', flag: 'https://flagcdn.com/w40/ke.png' },
        { code: 'az', name: 'أذربيجاني', flag: 'https://flagcdn.com/w40/az.png' },
        { code: 'ge', name: 'جورجي', flag: 'https://flagcdn.com/w40/ge.png' },
        { code: 'am', name: 'أرمني', flag: 'https://flagcdn.com/w40/am.png' },
        { code: 'kz', name: 'كازاخي', flag: 'https://flagcdn.com/w40/kz.png' },
        { code: 'uz', name: 'أوزبكي', flag: 'https://flagcdn.com/w40/uz.png' },
        { code: 'lk', name: 'سينهالي', flag: 'https://flagcdn.com/w40/lk.png' },
        { code: 'np', name: 'نيبالي', flag: 'https://flagcdn.com/w40/np.png' },
        { code: 'kh', name: 'خميري', flag: 'https://flagcdn.com/w40/kh.png' },
        { code: 'la', name: 'لاوي', flag: 'https://flagcdn.com/w40/la.png' },
        { code: 'mm', name: 'بورمي', flag: 'https://flagcdn.com/w40/mm.png' },
        { code: 'mn', name: 'منغولي', flag: 'https://flagcdn.com/w40/mn.png' },
        { code: 'is', name: 'آيسلندي', flag: 'https://flagcdn.com/w40/is.png' },
        { code: 'ee', name: 'إستوني', flag: 'https://flagcdn.com/w40/ee.png' },
        { code: 'lv', name: 'لاتفي', flag: 'https://flagcdn.com/w40/lv.png' },
        { code: 'lt', name: 'ليتواني', flag: 'https://flagcdn.com/w40/lt.png' },
        { code: 'sk', name: 'سلوفاكي', flag: 'https://flagcdn.com/w40/sk.png' },
        { code: 'si', name: 'سلوفيني', flag: 'https://flagcdn.com/w40/si.png' },
        { code: 'hr', name: 'كرواتي', flag: 'https://flagcdn.com/w40/hr.png' },
        { code: 'rs', name: 'صربي', flag: 'https://flagcdn.com/w40/rs.png' },
        { code: 'bg', name: 'بلغاري', flag: 'https://flagcdn.com/w40/bg.png' },
        { code: 'al', name: 'ألباني', flag: 'https://flagcdn.com/w40/al.png' },
        { code: 'mk', name: 'مقدوني', flag: 'https://flagcdn.com/w40/mk.png' },
        { code: 'ie', name: 'أيرلندي', flag: 'https://flagcdn.com/w40/ie.png' },
        { code: 'mt', name: 'مالطي', flag: 'https://flagcdn.com/w40/mt.png' },
        { code: 'cy', name: 'قبرصي', flag: 'https://flagcdn.com/w40/cy.png' },
        { code: 'lu', name: 'لوكسمبورغ', flag: 'https://flagcdn.com/w40/lu.png' },
        { code: 'li', name: 'ليختنشتاين', flag: 'https://flagcdn.com/w40/li.png' },
        { code: 'mc', name: 'موناكو', flag: 'https://flagcdn.com/w40/mc.png' },
        { code: 'ad', name: 'أندورا', flag: 'https://flagcdn.com/w40/ad.png' },
        { code: 'sm', name: 'سان مارينو', flag: 'https://flagcdn.com/w40/sm.png' },
        { code: 'va', name: 'الفاتيكان', flag: 'https://flagcdn.com/w40/va.png' },
        { code: 'nz', name: 'نيوزيلندي', flag: 'https://flagcdn.com/w40/nz.png' },
        { code: 'fj', name: 'فيجي', flag: 'https://flagcdn.com/w40/fj.png' },
        { code: 'pg', name: 'بابوا غينيا', flag: 'https://flagcdn.com/w40/pg.png' },
        { code: 'to', name: 'تونغا', flag: 'https://flagcdn.com/w40/to.png' },
        { code: 'ws', name: 'ساموا', flag: 'https://flagcdn.com/w40/ws.png' },
        { code: 'vu', name: 'فانواتو', flag: 'https://flagcdn.com/w40/vu.png' },
        { code: 'sb', name: 'سليمان', flag: 'https://flagcdn.com/w40/sb.png' },
        { code: 'fm', name: 'ميكرونيزيا', flag: 'https://flagcdn.com/w40/fm.png' },
        { code: 'pw', name: 'بالاو', flag: 'https://flagcdn.com/w40/pw.png' },
        { code: 'mh', name: 'مارشال', flag: 'https://flagcdn.com/w40/mh.png' },
        { code: 'ki', name: 'كيريباتي', flag: 'https://flagcdn.com/w40/ki.png' },
        { code: 'nr', name: 'ناورو', flag: 'https://flagcdn.com/w40/nr.png' },
        { code: 'tv', name: 'توفالو', flag: 'https://flagcdn.com/w40/tv.png' }
    ],

    async loadLanguage(langCode) {
        try {
            const response = await fetch(`./locales/${langCode}/translation.json`);
            if (!response.ok) throw new Error();
            const data = await response.json();
            const current = this.languages.find(l => l.code === langCode);
            document.getElementById('selected-flag').src = current.flag;
            document.documentElement.dir = (['ar', 'fa', 'ur', 'he'].includes(langCode)) ? 'rtl' : 'ltr';
            
            // تطبيق الترجمات للنصوص
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (data[key]) el.innerHTML = data[key];
            });
        } catch (e) {
            const current = this.languages.find(l => l.code === langCode);
            document.getElementById('selected-flag').src = current.flag;
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
    btn.onclick = (e) => { e.stopPropagation(); dropdown.classList.toggle('show'); };
    window.onclick = () => dropdown.classList.remove('show');
});
