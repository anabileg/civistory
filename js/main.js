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
    const modal = document.getElementById('infoModal'); // التأكد من استخدام ID الموحد
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
    const mediaTrack = document.getElementById('mediaTrack');
    if (mediaTrack) {
        let mediaHtml = '';
        for(let i=1; i<=13; i++) {
            mediaHtml += `<img src="assets/${i}.webp" onclick="viewImage(this.src)" alt="Media ${i}">`;
        }
        mediaTrack.innerHTML = mediaHtml + mediaHtml; // تكرار للتحريك اللانهائي
    }

    // --- تشغيل شريط الشركاء (Partners Track) ---
    const partnersTrack = document.getElementById('partnersTrack');
    if (partnersTrack) {
        let partnersHtml = '';
        for(let i=201; i<=209; i++) {
            partnersHtml += `<img src="assets/${i}.webp" onclick="viewImage(this.src)" alt="Partner ${i}">`;
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
            const linkText = link.textContent.trim();
            if (linkText === 'من نحن' || linkText === 'رسالتنا' || 
                linkText === 'About Us' || linkText === 'Our Messages' ||
                linkText === 'رسالاتنا') {
                
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    openModal(linkText);
                });
            }
        });
    }, 1200); 

    // ضبط رابط LinkedIn بشكل صحيح
    const linkedinIcon = document.querySelector('.fa-linkedin-in');
    if(linkedinIcon && linkedinIcon.parentElement) {
        linkedinIcon.parentElement.setAttribute('href', 'https://www.linkedin.com/in/%D9%82%D8%B5%D8%B5-%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D8%B1%D8%A7%D8%AA-0a8917277/');
        linkedinIcon.parentElement.setAttribute('target', '_blank');
    }
});

console.log("تم تحميل ملف الوظائف الأساسية بنجاح بنسبة 100%.");
