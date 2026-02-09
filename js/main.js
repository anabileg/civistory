/* =========================================
   ملف الوظائف الأساسية الكامل المحدث - main.js
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

if (document.getElementById('btnUp')) {
    document.getElementById('btnUp').onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

// 2. وظائف التحكم في النوافذ المنبثقة (Modals)
function openModal(title) {
    const modal = document.getElementById('infoModal'); 
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
        console.log("تم فتح نافذة: " + title);
    }
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

// 3. وظائف عرض الصور (Lightbox) المحدثة لتطابق الـ HTML
function viewImage(src) {
    const viewer = document.getElementById('imageViewer');
    const fullImg = document.getElementById('fullImage');
    if (viewer && fullImg) {
        viewer.style.display = 'flex';
        fullImg.src = src;
    }
}

// 4. إدارة الأحداث والروابط عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // --- تشغيل شريط الميديا (Media Track) ---
    // تم التعديل لتبدأ من 101 وتنتهي عند 124 كما طلبت
    const mediaTrack = document.getElementById('mediaTrack');
    if (mediaTrack) {
        let mediaHtml = '';
        for(let i=101; i<=124; i++) {
            mediaHtml += `<img src="assets/${i}.webp" onclick="viewImage(this.src)" alt="Media ${i}" onerror="this.style.display='none'">`;
        }
        mediaTrack.innerHTML = mediaHtml + mediaHtml; 
        // ضبط السرعة هنا مباشرة لضمان عدم اختفاء الصور
        mediaTrack.style.animationDuration = '2500s';
    }

    // --- تشغيل شريط الشركاء (Partners Track) ---
    const partnersTrack = document.getElementById('partnersTrack');
    if (partnersTrack) {
        let partnersHtml = '';
        for(let i=201; i<=209; i++) {
            partnersHtml += `<img src="assets/${i}.webp" onclick="viewImage(this.src)" alt="Partner ${i}" onerror="this.style.display='none'">`;
        }
        partnersTrack.innerHTML = partnersHtml + partnersHtml;
    }

    // ربط أزرار الإغلاق
    const closeBtn = document.querySelector('.close-modal-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // إغلاق عند الضغط في المنطقة المظلمة
    const infoModal = document.getElementById('infoModal');
    if (infoModal) {
        infoModal.addEventListener('click', function(event) {
            if (event.target === infoModal) {
                closeModal();
            }
        });
    }

    // تفعيل الروابط لفتح المودال
    setTimeout(function() {
        const links = document.querySelectorAll('#navLinks a');
        links.forEach(link => {
            const i18nKey = link.getAttribute('data-i18n');
            const linkText = link.textContent.trim();
            
            if (i18nKey === 'about' || i18nKey === 'messages' || 
                linkText === 'من نحن' || linkText === 'About Us') {
                
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    openModal(linkText);
                });
            }
        });
    }, 1000); 

    // ضبط رابط LinkedIn
    const linkedinIcon = document.querySelector('.fa-linkedin-in');
    if(linkedinIcon && linkedinIcon.parentElement) {
        linkedinIcon.parentElement.setAttribute('href', 'https://www.linkedin.com/in/%D9%82%D8%B5%D8%B5-%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D8%B1%D8%A7%D8%AA-0a8917277/');
        linkedinIcon.parentElement.setAttribute('target', '_blank');
    }
});
