/* =========================================
   ملف الوظائف الأساسية الكامل - main.js
   ========================================= */

// 1. وظيفة زر الصعود للأعلى (Back to Top)
window.onscroll = function() {
    const btnUp = document.getElementById('btnUp');
    if (btnUp) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnUp.style.display = "flex";
        } else {
            btnUp.style.display = "none";
        }
    }
};

// عند الضغط على زر الصعود للأعلى
if (document.getElementById('btnUp')) {
    document.getElementById('btnUp').onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

// 2. وظائف التحكم في النوافذ المنبثقة (Modals)

// وظيفة فتح النافذة الكبيرة (المودال)
function openModal(title) {
    const modal = document.getElementById('infoModal'); 
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
        console.log("تم فتح نافذة: " + title);
    } else if (modalOverlay) {
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// وظيفة إغلاق النافذة
function closeModal() {
    const modal = document.getElementById('infoModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modal) modal.style.display = 'none';
    if (modalOverlay) modalOverlay.style.display = 'none';
    
    document.body.style.overflow = 'auto'; 
}

// 3. وظائف عرض الصور (Lightbox)
function viewImage(src) {
    const modal = document.getElementById('imageModal');
    const fullImg = document.getElementById('fullImg');
    if (modal && fullImg) {
        modal.style.display = 'flex';
        fullImg.src = src;
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) modal.style.display = 'none';
}

// 4. إدارة الأحداث والروابط عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // --- تشغيل شريط الميديا (Media Track) ---
    // تأكد من وجود مجلد باسم assets وبداخله الصور من 1 إلى 13 بصيغة webp
    const mediaTrack = document.getElementById('mediaTrack');
    if (mediaTrack) {
        let mediaHtml = '';
        for(let i=1; i<=13; i++) {
            mediaHtml += `<img src="assets/${i}.webp" onclick="viewImage(this.src)" alt="Media ${i}" onerror="this.src='https://via.placeholder.com/150?text=Image+Missing'">`;
        }
        mediaTrack.innerHTML = mediaHtml + mediaHtml; 
    }

    // --- تشغيل شريط الشركاء (Partners Track) ---
    // تأكد من وجود الصور من 201 إلى 209 بصيغة webp في مجلد assets
    const partnersTrack = document.getElementById('partnersTrack');
    if (partnersTrack) {
        let partnersHtml = '';
        for(let i=201; i<=209; i++) {
            partnersHtml += `<img src="assets/${i}.webp" onclick="viewImage(this.src)" alt="Partner ${i}" onerror="this.src='https://via.placeholder.com/150?text=Logo+Missing'">`;
        }
        partnersTrack.innerHTML = partnersHtml + partnersHtml;
    }

    // ربط زر الغلق الأحمر (X)
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // إغلاق النافذة عند الضغط في المنطقة المظلمة
    const modalOverlay = document.querySelector('.modal-overlay');
    const infoModal = document.getElementById('infoModal');
    
    [modalOverlay, infoModal].forEach(el => {
        if (el) {
            el.addEventListener('click', function(event) {
                if (event.target === el) {
                    closeModal();
                }
            });
        }
    });

    // تفعيل روابط (من نحن - رسالتنا) لفتح النافذة الكبيرة
    setTimeout(function() {
        const links = document.querySelectorAll('#navLinks a');
        links.forEach(link => {
            const i18nKey = link.getAttribute('data-i18n');
            const linkText = link.textContent.trim();
            
            if (i18nKey === 'about' || i18nKey === 'messages' || 
                linkText === 'من نحن' || linkText === 'رسالتنا' || 
                linkText === 'رسالاتنا' || linkText === 'About Us' || linkText === 'Our Messages') {
                
                link.addEventListener('click', function(e) {
                    if (link.getAttribute('href') === '#' || !link.getAttribute('href').startsWith('#sec_')) {
                        e.preventDefault();
                        openModal(linkText);
                    }
                });
            }
        });
    }, 1500); 

    // ضبط رابط LinkedIn بشكل صحيح
    const linkedinIcon = document.querySelector('.fa-linkedin-in');
    if(linkedinIcon && linkedinIcon.parentElement) {
        linkedinIcon.parentElement.setAttribute('href', 'https://www.linkedin.com/in/%D9%82%D8%B5%D8%B5-%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D8%B1%D8%A7%D8%AA-0a8917277/');
        linkedinIcon.parentElement.setAttribute('target', '_blank');
    }
});

console.log("تم تحميل ملف الوظائف الأساسية بنجاح.");
