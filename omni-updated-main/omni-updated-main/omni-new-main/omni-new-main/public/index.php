<?php
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);

// Auto-symlink or direct stream for uploaded storage files (bypasses shared host symlink limits)
if (strpos($uri, '/storage/') === 0) {
    $subPath = substr($uri, strlen('/storage/'));
    $candidates = [
        __DIR__ . '/storage/' . ltrim($subPath, '/'),
        __DIR__ . '/../omni-backend/storage/app/public/' . ltrim($subPath, '/'),
        __DIR__ . '/omni-backend/storage/app/public/' . ltrim($subPath, '/'),
    ];
    foreach ($candidates as $cand) {
        if (file_exists($cand) && is_file($cand)) {
            $ext = strtolower(pathinfo($cand, PATHINFO_EXTENSION));
            $mimes = [
                'jpg' => 'image/jpeg',
                'jpeg' => 'image/jpeg',
                'png' => 'image/png',
                'gif' => 'image/gif',
                'webp' => 'image/webp',
                'svg' => 'image/svg+xml',
                'pdf' => 'application/pdf',
            ];
            $mime = $mimes[$ext] ?? (function_exists('mime_content_type') ? mime_content_type($cand) : 'application/octet-stream');
            header("Content-Type: {$mime}");
            header('Content-Length: ' . filesize($cand));
            header('Cache-Control: public, max-age=31536000');
            readfile($cand);
            exit;
        }
    }
}

// If request is for root / or frontend SPA pages, serve React frontend with injected SEO
if ($uri === '/' || $uri === '' || !preg_match('#^/(admin|api|livewire|filament|storage)#', $uri)) {
    if (file_exists(__DIR__ . '/index.html')) {
        $seoRoutes = [
            '/' => [
                'title' => 'Best Super Speciality Hospital in Hyderabad & Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Looking for the best super speciality hospital in Hyderabad and Andhra Pradesh? OMNI Hospitals offers advanced medical treatments, expert super speciality doctors, emergency care and comprehensive healthcare across multiple specialties. Book your appointment today.'
            ],
            '/specialities/cardiology' => [
                'title' => 'Best Cardiology Hospital in Hyderabad & Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get advanced heart care, cardiac diagnosis and treatment from experienced cardiologists at OMNI Hospitals in Hyderabad and Andhra Pradesh. Book your consultation today.'
            ],
            '/specialities/orthopedics' => [
                'title' => 'Best Orthopedic Hospital & Specialists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert bone, joint, spine and fracture care from experienced orthopedic specialists at OMNI Hospitals, a leading orthopedic hospital in Hyderabad and Andhra Pradesh. Book your consultation today.'
            ],
            '/specialities/neurology' => [
                'title' => 'Best Neurology Hospital & Neurologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert neurological care from experienced neurologists at OMNI Hospitals. Consult specialists for stroke, epilepsy, migraine, brain and nerve disorders in Hyderabad and Andhra Pradesh. Book your appointment today.'
            ],
            '/specialities/urology' => [
                'title' => 'Best Urology Hospital & Urologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert urological care from experienced urologists at OMNI Hospitals. Consult specialists for kidney stones, prostate problems, urinary disorders and other urological conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
            ],
            '/specialities/emergency-medicine' => [
                'title' => 'Best Emergency Hospital & Emergency Care Specialists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get immediate medical attention with 24/7 emergency care at OMNI Hospitals. Experienced emergency medicine specialists provide urgent treatment for accidents, injuries and critical conditions across Hyderabad and Andhra Pradesh.'
            ],
            '/specialities/general-medicine' => [
                'title' => 'Best General Medicine Hospital & Physicians in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert general medical care from experienced physicians at OMNI Hospitals. Consult specialists for fever, infections, diabetes, hypertension and other health conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
            ],
            '/specialities/gastroenterology' => [
                'title' => 'Best Gastroenterology Hospital & Gastroenterologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert digestive and liver care from experienced gastroenterologists at OMNI Hospitals. Consult specialists for acidity, ulcers, liver disorders, and gastrointestinal problems in Hyderabad and Andhra Pradesh. Book your appointment today.'
            ],
            '/specialities/obstetrics-gynaecology' => [
                'title' => 'Best Gynaecology Hospital & Gynaecologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => "Get expert women's healthcare, pregnancy care and maternity services from experienced gynaecologists at OMNI Hospitals. Consult specialists for fertility, menstrual and reproductive health concerns in Hyderabad and Andhra Pradesh. Book your appointment today."
            ],
            '/specialities/gynaecology' => [
                'title' => 'Best Gynaecology Hospital & Gynaecologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => "Get expert women's healthcare, pregnancy care and maternity services from experienced gynaecologists at OMNI Hospitals. Consult specialists for fertility, menstrual and reproductive health concerns in Hyderabad and Andhra Pradesh. Book your appointment today."
            ],
            '/specialities/ent' => [
                'title' => 'Best ENT Hospital & ENT Specialists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert ENT care from experienced ENT specialists at OMNI Hospitals. Consult doctors for ear infections, sinusitis, hearing problems, throat disorders and nasal conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
            ],
            '/specialities/nephrology' => [
                'title' => 'Best Nephrology Hospital & Nephrologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert kidney care from experienced nephrologists at OMNI Hospitals. Consult specialists for kidney stones, chronic kidney disease, kidney infections and other kidney disorders in Hyderabad and Andhra Pradesh. Book your appointment today.'
            ],
            '/specialities/pulmonology' => [
                'title' => 'Best Pulmonology Hospital & Pulmonologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert lung and respiratory care from experienced pulmonologists at OMNI Hospitals. Consult specialists for asthma, bronchitis, pneumonia, COPD and other respiratory conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
            ],
            '/specialities/dermatology' => [
                'title' => 'Best Dermatology Hospital & Skin Specialists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert skin, hair and nail care from experienced dermatologists at OMNI Hospitals. Consult specialists for acne, eczema, psoriasis, skin allergies and other skin conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
            ],
            '/specialities/psychiatry' => [
                'title' => 'Best Psychiatry Hospital & Psychiatrists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert mental healthcare from experienced psychiatrists at OMNI Hospitals. Consult specialists for anxiety, depression, stress, sleep disorders and other mental health conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
            ],
            '/specialities/plastic-surgery' => [
                'title' => 'Best Plastic Surgery Hospital & Plastic Surgeons in Hyderabad and Andhra Pradesh | OMNI Hospitals',
                'desc' => 'Get expert plastic and reconstructive surgical care from experienced plastic surgeons at OMNI Hospitals. Explore advanced treatments for reconstructive surgery, burn injuries, scars and cosmetic concerns in Hyderabad and Andhra Pradesh. Book your consultation today.'
            ]
        ];

        $cleanUri = rtrim($uri, '/');
        if ($cleanUri === '') $cleanUri = '/';

        $html = file_get_contents(__DIR__ . '/index.html');
        if (isset($seoRoutes[$cleanUri])) {
            $t = htmlspecialchars($seoRoutes[$cleanUri]['title'], ENT_QUOTES, 'UTF-8');
            $d = htmlspecialchars($seoRoutes[$cleanUri]['desc'], ENT_QUOTES, 'UTF-8');
            $c = 'https://omnihospitals.in' . ($cleanUri === '/' ? '/' : $cleanUri);
            $html = preg_replace('#<title>.*?</title>#is', '<title>' . $t . '</title>', $html, 1);
            $html = preg_replace('#<meta\s+name=["\']description["\']\s+content=["\'].*?["\']\s*/?>#is', '<meta name="description" content="' . $d . '" />', $html, 1);
            $html = preg_replace('#<meta\s+property=["\']og:title["\']\s+content=["\'].*?["\']\s*/?>#is', '<meta property="og:title" content="' . $t . '" />', $html, 1);
            $html = preg_replace('#<meta\s+property=["\']og:description["\']\s+content=["\'].*?["\']\s*/?>#is', '<meta property="og:description" content="' . $d . '" />', $html, 1);
            $html = preg_replace('#<link\s+rel=["\']canonical["\']\s+href=["\'].*?["\']\s*/?>#is', '<link rel="canonical" href="' . $c . '" />', $html, 1);
        }
        echo $html;
        exit;
    }
}

// Auto-detect backend location (either outside public_html or inside)
$backendPath = null;
if (file_exists(__DIR__ . '/../omni-backend/vendor/autoload.php')) {
    $backendPath = __DIR__ . '/../omni-backend';
} elseif (file_exists(__DIR__ . '/omni-backend/vendor/autoload.php')) {
    $backendPath = __DIR__ . '/omni-backend';
}

if ($backendPath) {
    if (file_exists($maintenance = $backendPath . '/storage/framework/maintenance.php')) {
        require $maintenance;
    }

    require $backendPath . '/vendor/autoload.php';

    $app = require_once $backendPath . '/bootstrap/app.php';
    $app->handleRequest(Request::capture());
} else {
    $rawUri = $_SERVER['REQUEST_URI'] ?? '';
    if (strpos($rawUri, '/api/') !== false) {
        header('Content-Type: application/json; charset=UTF-8', true, 503);
        echo json_encode(['status' => 'error', 'message' => 'Backend is initializing, please ensure omni-backend is uploaded.']);
        exit;
    }
    include __DIR__ . '/index.html';
}
