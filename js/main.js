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

// وظيفة فتح النافذة الكبيرة
function openModal(title) {
    const modal = document.querySelector('.modal-overlay');
    const modalContent = document.getElementById('modal-body-content'); // المكان الذي سيوضع فيه النص
    
    if (modal) {
        modal.style.display = 'flex'; // استخدام flex ليظهر التنسيق الذي صممناه في CSS
        document.body.style.overflow = 'hidden'; // منع تحريك خلفية الموقع أثناء فتح النافذة
        
        // هنا سيقوم نظام i18n بوضع النص المناسب بناءً على العنوان (من نحن أو رسالتنا)
        console.log("فتح نافذة: " + title);
    }
}

// وظيفة إغلاق النافذة
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // إعادة تفعيل حركة الموقع
    }
}

// 3. إدارة الأحداث والروابط عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // ربط زر الغلق الأحمر (X) بوظيفة الإغلاق
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // إغلاق النافذة عند الضغط في أي مكان خارج المربع (على التعتيم الأسود)
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        window.addEventListener('click', function(event) {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // تفعيل الروابط (من نحن - رسالتنا) بعد تحميل اللغات
    setTimeout(function() {
        // نبحث في جميع الروابط الموجودة في القائمة
        const links = document.querySelectorAll('.nav-links a');
        
        links.forEach(link => {
            // التحقق من النص المكتوب داخل الرابط
            const linkText = link.textContent.trim();
            
            if (linkText === 'من نحن' || linkText === 'رسالتنا' || 
                linkText === 'About Us' || linkText === 'Our Messages') {
                
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // منع الرابط من فتح صفحة جديدة
                    openModal(linkText);
                });
            }
        });
    }, 1200); // مهلة زمنية بسيطة للتأكد من تحميل نصوص اللغات
});

console.log("تم تحميل ملف الوظائف الأساسية بنجاح بنسبة 100%.");
