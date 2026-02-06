<!DOCTYPE html>
<html id="htmlTag" lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CiviStories</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@700;900&display=swap" rel="stylesheet">
    <style>
        :root { --gold: #d4af37; --white: #ffffff; }
        body { background: #000; color: white; font-family: 'Tajawal', sans-serif; margin: 0; }
        
        .navbar { 
            background: #000; 
            border-bottom: 2px solid var(--gold); 
            padding: 10px 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 10001;
        }

        /* تنسيق قائمة اللغات: العلم أقصى اليمين والخط سميك */
        .lang-dropdown { position: relative; cursor: pointer; }
        
        .lang-btn-display {
            display: flex;
            align-items: center;
            gap: 12px; /* المسافة بين العلم والاسم */
            border: 1.5px solid var(--gold);
            padding: 6px 12px;
            border-radius: 6px;
            background: #111;
        }

        .lang-btn-display img { width: 28px; order: 2; } /* العلم أقصى اليمين داخل الزر */
        .lang-btn-display span { 
            font-weight: 900; /* خط سميك جداً */
            font-size: 1.1rem;
            color: var(--white);
            order: 1; /* الاسم يسار العلم */
        }

        .lang-dropdown-list {
            position: absolute;
            top: 115%;
            right: 0;
            background: #fff;
            color: #000;
            width: 200px;
            display: none;
            border-radius: 8px;
            list-style: none;
            padding: 5px 0;
            box-shadow: 0 8px 20px rgba(0,0,0,0.6);
            max-height: 400px;
            overflow-y: auto;
        }

        .lang-dropdown-list.show { display: block; }

        .lang-dropdown-list li {
            display: flex;
            align-items: center;
            justify-content: flex-end; /* محاذاة لليمين */
            gap: 10px;
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
            transition: 0.2s;
        }

        .lang-dropdown-list li:hover { background: #f5f5f5; }
        .lang-dropdown-list li img { width: 22px; order: 2; } /* العلم يمين داخل القائمة */
        .lang-dropdown-list li span { font-weight: 900; order: 1; } /* الاسم سميك بجانبه */

        .nav-logo-img { height: 60px; }
    </style>
</head>
<body>

<nav class="navbar">
    <div class="lang-dropdown" id="lang-btn">
        <div class="lang-btn-display">
            <span id="selected-lang-name">عربي</span>
            <img id="selected-flag" src="https://flagcdn.com/w40/eg.png">
        </div>
        <ul id="lang-list" class="lang-dropdown-list">
            </ul>
    </div>

    <img src="assets/logo.png" class="nav-logo-img">
</nav>

<script src="i18n.js"></script>
</body>
</html>
