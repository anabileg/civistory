/* =========================================
   ملف الوظائف الأساسية -  main.js
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

// فتح المربع
function openModal(title) {
    const modal = document.getElementById('modal');
    const modalTitle = modal.querySelector('.modal-title');
    modalTitle.textContent = title;
    modal.style.display = 'block';
}

// إغلاق المربع
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 3. إضافة أحداث النقر على روابط "من نحن" و"رسالتنا"
document.addEventListener('DOMContentLoaded', function() {
    // إغلاق المربع عند الضغط على الزر الأحمر
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // إغلاق المربع عند الضغط خارجه
    const modal = document.getElementById('modal');
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
    
    // إضافة أحداث النقر على الروابط بعد تحميل المحتوى
    setTimeout(function() {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                if (link.textContent === 'من نحن' || link.textContent === 'رسالتنا') {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        openModal(this.textContent);
                    });
                }
            });
        }
    }, 1000); // انتظر حتى يتم تحميل الروابط من ملف الترجمة
});

console.log("تم تحميل ملف الوظائف الأساسية بنجاح.");
