/* =========================================
   ملف الوظائف الأساسية - main.js
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
function openMessagesModal() {
    const modal = document.getElementById('messages-modal');
    if (modal) modal.style.display = 'flex';
}

function closeMessagesModal() {
    const modal = document.getElementById('messages-modal');
    if (modal) modal.style.display = 'none';
}

function openReferenceModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'block';
}

function closeReferenceModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none';
}

// وظيفة عامة لإغلاق أي نافذة منبثقة بالـ ID
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) popup.style.display = 'none';
}

// 3. إغلاق القوائم عند الضغط خارجها
window.addEventListener('click', function(event) {
    const langDropdown = document.getElementById('lang-dropdown-list');
    const langBtn = document.getElementById('lang-btn');
    if (langDropdown && !langBtn.contains(event.target) && !langDropdown.contains(event.target)) {
        langDropdown.classList.remove('show');
    }
});

console.log("تم تحميل ملف الوظائف الأساسية بنجاح.");
