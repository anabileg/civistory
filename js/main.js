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
    const modal = document.querySelector('.modal-overlay');
    const modalContent = document.getElementById('modal-body-content'); // المكان الذي يظهر فيه النص
    
    if (modal) {
        modal.style.display = 'flex'; // إظهار النافذة بنظام flex للتوسط
        document.body.style.overflow = 'hidden'; // منع تحريك الصفحة الخلفية
        
        // هنا يتم التأكد من تحديث النص أو العنوان إذا لزم الأمر
        console.log("تم فتح نافذة: " + title);
    }
}

// وظيفة إغلاق النافذة
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // إعادة تفعيل الحركة في الموقع
    }
}

// 3. إدارة الأحداث والروابط عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // ربط زر الغلق الأحمر (X) الموجود في أقصى اليسار فوق
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // إغلاق النافذة عند الضغط في أي مكان خارج المربع الكريمي (على المنطقة المظلمة)
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(event) {
            // إذا كان الضغط على الغطاء وليس على المحتوى الداخلي
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // تفعيل روابط (من نحن - رسالتنا) لفتح النافذة الكبيرة
    // نستخدم setTimeout لضمان تحميل نصوص الروابط من ملفات الترجمة أولاً
    setTimeout(function() {
        const links = document.querySelectorAll('.nav-links a');
        
        links.forEach(link => {
            const linkText = link.textContent.trim();
            
            // التحقق من مسمى الرابط بالعربي أو الإنجليزي
            if (linkText === 'من نحن' || linkText === 'رسالتنا' || 
                linkText === 'About Us' || linkText === 'Our Messages') {
                
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // منع الانتقال لصفحة أخرى
                    openModal(linkText);
                });
            }
        });
    }, 1200); 
});

console.log("تم تحميل ملف الوظائف الأساسية بنجاح بنسبة 100%.");
