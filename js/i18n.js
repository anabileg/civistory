/* =========================================
نظام الترجمة الدولي - i18n.js
========================================= */
const i18n = {
    currentLanguage: 'ar',
    
    // قائمة اللغات (86 لغة) كاملة كما هي
    languages: [
        { code: 'ar', name: 'عربي', flag: 'https://flagcdn.com/w20/eg.png' },
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
        { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
        { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w20/es.png' },
        { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' },
        { code: 'it', name: 'Italiano', flag: 'https://flagcdn.com/w20/it.png' },
        { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w20/pt.png' },
        { code: 'tr', name: 'Türkçe', flag: 'https://flagcdn.com/w20/tr.png' },
        { code: 'el', name: 'Ελληνικά', flag: 'https://flagcdn.com/w20/gr.png' },
        { code: 'nl', name: 'Nederlands', flag: 'https://flagcdn.com/w20/nl.png' },
        { code: 'ro', name: 'Română', flag: 'https://flagcdn.com/w20/ro.png' },
        { code: 'sv', name: 'Svenska', flag: 'https://flagcdn.com/w20/se.png' },
        { code: 'pl', name: 'Polski', flag: 'https://flagcdn.com/w20/pl.png' },
        { code: 'fi', name: 'Suomi', flag: 'https://flagcdn.com/w20/fi.png' },
        { code: 'da', name: 'Dansk', flag: 'https://flagcdn.com/w20/dk.png' },
        { code: 'no', name: 'Norsk', flag: 'https://flagcdn.com/w20/no.png' },
        { code: 'hu', name: 'Magyar', flag: 'https://flagcdn.com/w20/hu.png' },
        { code: 'sk', name: 'Slovenčina', flag: 'https://flagcdn.com/w20/sk.png' },
        { code: 'hr', name: 'Hrvatski', flag: 'https://flagcdn.com/w20/hr.png' },
        { code: 'sl', name: 'Slovenščina', flag: 'https://flagcdn.com/w20/si.png' },
        { code: 'bg', name: 'Български', flag: 'https://flagcdn.com/w20/bg.png' },
        { code: 'sr', name: 'Српски', flag: 'https://flagcdn.com/w20/rs.png' },
        { code: 'cs', name: 'Čeština', flag: 'https://flagcdn.com/w20/cz.png' },
        { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w20/ru.png' },
        { code: 'uk', name: 'Українська', flag: 'https://flagcdn.com/w20/ua.png' },
        { code: 'zh', name: '中文', flag: 'https://flagcdn.com/w20/cn.png' },
        { code: 'ja', name: '日本語', flag: 'https://flagcdn.com/w20/jp.png' },
        { code: 'ko', name: '한국어', flag: 'https://flagcdn.com/w20/kr.png' },
        { code: 'hi', name: 'हिन्दी', flag: 'https://flagcdn.com/w20/in.png' },
        { code: 'th', name: 'ไทย', flag: 'https://flagcdn.com/w20/th.png' },
        { code: 'vi', name: 'Tiếng Việt', flag: 'https://flagcdn.com/w20/vn.png' },
        { code: 'fa', name: 'فارسی', flag: 'https://flagcdn.com/w20/ir.png' },
        { code: 'ur', name: 'اردو', flag: 'https://flagcdn.com/w20/pk.png' },
        { code: 'bn', name: 'বাংলা', flag: 'https://flagcdn.com/w20/bd.png' },
        { code: 'id', name: 'Bahasa Indonesia', flag: 'https://flagcdn.com/w20/id.png' },
        { code: 'ms', name: 'Bahasa Melayu', flag: 'https://flagcdn.com/w20/my.png' },
        { code: 'tl', name: 'Tagalog', flag: 'https://flagcdn.com/w20/ph.png' },
        { code: 'sw', name: 'Kiswahili', flag: 'https://flagcdn.com/w20/tz.png' },
        { code: 'so', name: 'Soomaali', flag: 'https://flagcdn.com/w20/so.png' },
        { code: 'am', name: 'አማርኛ', flag: 'https://flagcdn.com/w20/et.png' },
        { code: 'yo', name: 'Yorùbá', flag: 'https://flagcdn.com/w20/ng.png' },
        { code: 'ha', name: 'Hausa', flag: 'https://flagcdn.com/w20/ne.png' },
        { code: 'zu', name: 'isiZulu', flag: 'https://flagcdn.com/w20/za.png' },
        { code: 'xh', name: 'isiXhosa', flag: 'https://flagcdn.com/w20/za.png' },
        { code: 'af', name: 'Afrikaans', flag: 'https://flagcdn.com/w20/za.png' },
        { code: 'mg', name: 'Malagasy', flag: 'https://flagcdn.com/w20/mg.png' },
        { code: 'ny', name: 'Chichewa', flag: 'https://flagcdn.com/w20/mw.png' },
        { code: 'st', name: 'Sesotho', flag: 'https://flagcdn.com/w20/ls.png' },
        { code: 'tn', name: 'Setswana', flag: 'https://flagcdn.com/w20/bw.png' },
        { code: 'ts', name: 'Xitsonga', flag: 'https://flagcdn.com/w20/za.png' },
        { code: 've', name: 'Tshivenda', flag: 'https://flagcdn.com/w20/za.png' },
        { code: 'ss', name: 'siSwati', flag: 'https://flagcdn.com/w20/sz.png' },
        { code: 'rw', name: 'Kinyarwanda', flag: 'https://flagcdn.com/w20/rw.png' },
        { code: 'rn', name: 'Kirundi', flag: 'https://flagcdn.com/w20/bi.png' },
        { code: 'lg', name: 'Luganda', flag: 'https://flagcdn.com/w20/ug.png' },
        { code: 'ak', name: 'Akan', flag: 'https://flagcdn.com/w20/gh.png' },
        { code: 'ff', name: 'Fula', flag: 'https://flagcdn.com/w20/cm.png' },
        { code: 'wo', name: 'Wolof', flag: 'https://flagcdn.com/w20/sn.png' },
        { code: 'bm', name: 'Bambara', flag: 'https://flagcdn.com/w20/ml.png' },
        { code: 'dyu', name: 'Dyula', flag: 'https://flagcdn.com/w20/ci.png' },
        { code: 'mos', name: 'Mossi', flag: 'https://flagcdn.com/w20/bf.png' },
        { code: 'srr', name: 'Serer', flag: 'https://flagcdn.com/w20/sn.png' },
        { code: 'sn', name: 'Shona', flag: 'https://flagcdn.com/w20/zw.png' },
        { code: 'bem', name: 'Bemba', flag: 'https://flagcdn.com/w20/zm.png' },
        { code: 'ln', name: 'Lingala', flag: 'https://flagcdn.com/w20/cd.png' },
        { code: 'kg', name: 'Kongo', flag: 'https://flagcdn.com/w20/cd.png' },
        { code: 'ku', name: 'Kurdî', flag: 'https://flagcdn.com/w20/iq.png' },
        { code: 'az', name: 'Azərbaycan', flag: 'https://flagcdn.com/w20/az.png' },
        { code: 'uz', name: 'Oʻzbek', flag: 'https://flagcdn.com/w20/uz.png' },
        { code: 'kk', name: 'Қазақ', flag: 'https://flagcdn.com/w20/kz.png' },
        { code: 'ky', name: 'Кыргыз', flag: 'https://flagcdn.com/w20/kg.png' },
        { code: 'tk', name: 'Türkmen', flag: 'https://flagcdn.com/w20/tm.png' },
        { code: 'ps', name: 'پښتو', flag: 'https://flagcdn.com/w20/af.png' },
        { code: 'sd', name: 'سنڌي', flag: 'https://flagcdn.com/w20/pk.png' },
        { code: 'bal', name: 'Balochi', flag: 'https://flagcdn.com/w20/pk.png' },
        { code: 'si', name: 'සිංහල', flag: 'https://flagcdn.com/w20/lk.png' },
        { code: 'dv', name: 'ދިވެހި', flag: 'https://flagcdn.com/w20/mv.png' },
        { code: 'my', name: 'မြန်မာ', flag: 'https://flagcdn.com/w20/mm.png' },
        { code: 'km', name: 'ភាសាខ្មែរ', flag: 'https://flagcdn.com/w20/kh.png' },
        { code: 'lo', name: 'ລາວ', flag: 'https://flagcdn.com/w20/la.png' },
        { code: 'mn', name: 'Монгол', flag: 'https://flagcdn.com/w20/mn.png' },
        { code: 'bo', name: 'བོད་སྐད', flag: 'https://flagcdn.com/w20/cn.png' },
        { code: 'dz', name: 'རྫོང་ཁ', flag: 'https://flagcdn.com/w20/bt.png' }
    ],
    
    async loadLanguage(lang) {
        const selectedLang = this.languages.find(l => l.code === lang) || this.languages[0];
        try {
            // محاولة جلب ملف الترجمة الخارجي إذا وجد
            const response = await fetch(`./locales/${lang}/translation.json`);
            const translations = response.ok ? await response.json() : this.getDefaultTranslations(lang);
            this.applyTranslations(translations, lang);
            
            const flagImg = document.getElementById('currentFlag');
            if (flagImg) { flagImg.src = selectedLang.flag; }
            
            const rtlLanguages = ['ar', 'ur', 'fa', 'sd', 'ps', 'ku', 'he', 'yi', 'ug', 'syr', 'dv', 'ckb'];
            document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
            this.currentLanguage = lang;
        } catch (error) {
            console.error("فشل تحميل ملف اللغة:", lang, error);
            const translations = this.getDefaultTranslations(lang);
            this.applyTranslations(translations, lang);
            
            const flagImg = document.getElementById('currentFlag');
            if (flagImg) { flagImg.src = selectedLang.flag; }
            
            const rtlLanguages = ['ar', 'ur', 'fa', 'sd', 'ps', 'ku', 'he', 'yi', 'ug', 'syr', 'dv', 'ckb'];
            document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
            this.currentLanguage = lang;
        }
    },
    
    getDefaultTranslations(lang) {
        if (lang === 'en') {
            return {
                heroTitle: '<span style="color:#ff0000">Tsunami</span> <span style="color:#d4af37">of Digital Illusion: From the Cradle of Civilization Egypt to the World... A Cry to Save Humanity</span>',
                bookBtnText: "Browse the Full Book",
                bookLink: "https://heyzine.com/flip-book/48ab3792ec.html",
                videoUrl: "https://www.youtube.com/embed/ite_9cHeOO4?autoplay=1&mute=1&loop=1&playlist=ite_9cHeOO4&rel=0",
                nav: ["About Us", "Our Goals", "Our Cry", "Our Messages", "National Awareness", "Media", "Statistics", "Losses", "Awareness Programs", "Human Vision", "Our Human Reference", "Our Partners"],
                social: [
                    {"icon": "fab fa-whatsapp", "color": "#25D366", "link": "https://wa.me/201009995015"}
                ],
                news: [
                    "Al-Azhar: Nearly one divorce case every two and a half minutes due to digital addiction",
                    "Ministry of Awqaf: Smartphones are one of the main causes of marital silence and coldness",
                    "Red Alert: Family breakdown threatens social and community stability in Egypt",
                    "Ministry of Health: 3 million annual visits to psychiatric clinics due to social media disorders",
                    "Egyptian Church: 60% of family problems are linked to isolation and digital excess"
                ]
            };
        }
        
        return {
            heroTitle: '<span style="color:#ff0000">تسونامي</span> <span style="color:#d4af37">الوهم الرقمي: من مهد الحضارة مصر إلى العالم... صرخة لإنقاذ الإنسانية</span>',
            bookBtnText: "تصفح الكتاب كاملاً",
            bookLink: "https://heyzine.com/flip-book/48ab3792ec.html",
            videoUrl: "https://www.youtube.com/embed/ite_9cHeOO4?autoplay=1&mute=1&loop=1&playlist=ite_9cHeOO4&rel=0",
            nav: ["من نحن", "أهدافنا", "صرختنا", "رسالاتنا", "وعي وطني", "ميديا", "إحصائيات", "خسائر", "برامج توعوية", "رؤية إنسانية", "مرجعيتنا الإنسانية", "شركاؤنا"],
            social: [
                {"icon": "fab fa-youtube", "color": "#FF0000", "link": "https://www.youtube.com/@CiviStories"},
                {"icon": "fab fa-facebook-f", "color": "#1877F2", "link": "https://www.facebook.com/profile.php?id=100093677167187"},
                {"icon": "fab fa-tiktok", "color": "#ffffff", "link": "https://www.tiktok.com/@civistoriesarabic"},
                {"icon": "fab fa-x-twitter", "color": "#ffffff", "link": "https://x.com/civistories"},
                {"icon": "fab fa-instagram", "color": "#E4405F", "link": "https://www.instagram.com/civi.stories"},
                {"icon": "fab fa-pinterest", "color": "#E60023", "link": "https://www.pinterest.com/civistories/"},
                {"icon": "fab fa-linkedin-in", "color": "#0077B5", "link": "https://www.linkedin.com/in/قصص-الحدارات-0a8917277"},
                {"icon": "fab fa-whatsapp", "color": "#25D366", "link": "https://wa.me/201009995015"}
            ],
            news: [
                "الأزهر الشريف: حالة طلاق تقريباً كل دقيقتين ونصف بسبب الإدمان الرقمي",
                "وزارة الأوقاف: الهواتف الذكية أحد أسباب الخرس والبرود الزوجي الرئيسية",
                "إنذار أحمر: تفكك الأسر يُهدد الاستقرار الاجتماعي والمجتمعي في مصر",
                "وزارة الصحة: ٣ ملايين زيارة سنوية للعيادات النفسية بسبب اضطرابات السوشيال ميديا",
                "الكنيسة المصرية: ٦٠% من المشاكل الأسرية مرتبطة بالانعزال والإفراط الرقمي",
                "القصر العيني: محاولة انتحار كل ٦ ساعات تقريباً بسبب التنمر عبر الإنترنت",
                "وزارة المالية: ١٥ مليار جنيه خسائر إنتاجية سنوية بسبب الإدمان الرقمي",
                "اليونيسف: ٤٧% من أطفال مصر تعرضوا للتنمر الإلكتروني المؤذي",
                "الإحصاء: زيادة ٥٧% في معدلات الطلاق خلال ٥ سنوات سابقة",
                "وزارة الداخلية: ٤٠% من بلاغات العنف الأسري سببها تطبيقات التواصل الاجتماعي"
            ]
        };
    },
    
    applyTranslations(data, currentLang) {
        const mainTitle = document.getElementById('mainTitle');
        if (mainTitle && data.heroTitle) { mainTitle.innerHTML = data.heroTitle; }
        
        const bookBtn = document.getElementById('bookBtn');
        if (bookBtn) {
            if (data.bookBtnText) bookBtn.textContent = data.bookBtnText;
            if (data.bookLink) bookBtn.href = data.bookLink;
        }
        
        const mainVideo = document.getElementById('mainVideo');
        if (mainVideo && data.videoUrl) { mainVideo.src = data.videoUrl; }
        
        const navLinks = document.getElementById('navLinks');
        if (navLinks && data.nav && Array.isArray(data.nav)) {
            // أسماء الـ IDs للأقسام بالترتيب
            const sectionIDs = [
                "sec_about", "sec_goals", "sec_shout", "sec_messages", "sec_awareness", 
                "sec_media", "sec_stats", "sec_losses", "sec_programs", "sec_vision", 
                "sec_reference", "sec_partners"
            ];
            
            let navHTML = "";
            data.nav.forEach((item, index) => {
                const targetID = sectionIDs[index] || "sec_about";
                // إضافة الروابط مع التأكد من بقاء وظيفة الـ Modal لـ "من نحن" و "رسالاتنا"
                navHTML += `<a href="#${targetID}" onclick="if('${targetID}'==='sec_about' || '${targetID}'==='sec_messages'){ event.preventDefault(); openModal('${item}'); }">${item}</a>`;
            });
            navLinks.innerHTML = navHTML;
        }
        
        const socialIcons = document.getElementById('socialIcons');
        if (socialIcons && data.social && Array.isArray(data.social)) {
            let socialHtml = "";
            
            if (currentLang === 'ar') {
                socialHtml = data.social.map(s => 
                    `<a href="${s.link}" target="_blank" style="color:${s.color} !important">
                    <i class="${s.icon}"></i>
                    </a>`
                ).join('');
            } else {
                const whatsapp = data.social.find(s => s.icon.includes('whatsapp'));
                if (whatsapp) {
                    socialHtml = `<a href="${whatsapp.link}" target="_blank" style="color:${whatsapp.color} !important">
                    <i class="${whatsapp.icon}"></i>
                    </a>`;
                }
            }
            
            // إضافة رابط البريد الإلكتروني بشكل صحيح مع حل المشكلة
            socialHtml += `<a href="mailto:civistories@gmail.com" onclick="handleEmailClick(event)" style="color:#ffffff !important">
                <i class="fas fa-envelope"></i>
            </a>`;
            
            socialIcons.innerHTML = socialHtml;
        }
        
        const tickerTrack = document.getElementById('tickerTrack');
        if (tickerTrack && data.news && Array.isArray(data.news)) {
            const newsHTML = data.news.map(n => `<span>• ${n}</span>`).join('');
            tickerTrack.innerHTML = newsHTML + newsHTML;
        }
    },
    
    renderDropdown() {
        const langMenu = document.getElementById('langMenu');
        if (!langMenu) return;
        
        langMenu.innerHTML = '';
        this.languages.forEach(lang => {
            const div = document.createElement('div');
            div.className = 'lang-item';
            div.innerHTML = `<img src="${lang.flag}" width="20"> ${lang.name}`;
            div.onclick = (e) => {
                e.stopPropagation();
                this.loadLanguage(lang.code);
                langMenu.style.display = 'none';
            };
            langMenu.appendChild(div);
        });
    },
    
    init() {
        const langMenu = document.getElementById('langMenu');
        const currentFlag = document.getElementById('currentFlag');
        
        if (currentFlag) {
            currentFlag.onclick = (e) => {
                e.stopPropagation();
                if (langMenu) {
                    langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
                }
            };
        }
        
        document.addEventListener('click', (e) => {
            if (langMenu && currentFlag && !currentFlag.contains(e.target)) {
                langMenu.style.display = 'none';
            }
        });
    }
};

// دالة خاصة لفتح البريد الإلكتروني بشكل صحيح
function handleEmailClick(event) {
    event.preventDefault();
    
    // فتح نافذة منبثقة للتأكد من البريد
    const email = 'civistories@gmail.com';
    const subject = 'رسالة من موقع قصص الحضارات';
    const body = 'السلام عليكم ورحمة الله وبركاته،\n\n';
    
    // بناء الرابط الكامل
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // فتح الرابط في نافذة جديدة
    window.location.href = mailtoLink;
    
    // رسالة تأكيد للمستخدم
    alert('تم فتح نافذة البريد الإلكتروني. إذا لم تفتح، يرجى التأكد من إعدادات المتصفح أو نسخ البريد يدويًا:\n\ncivistories@gmail.com');
}

window.addEventListener('DOMContentLoaded', () => {
    i18n.renderDropdown();
    // تحميل اللغة العربية كافتراضية عند البدء
    i18n.loadLanguage('ar');
    i18n.init();
});
