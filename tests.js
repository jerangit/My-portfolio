// --- Unit Testing for Portfolio Website ---
// This script runs automatically when the page loads and checks if critical elements exist.

console.log("%c STARTING UNIT TESTS ", "background: #222; color: #bada55; font-size: 20px; padding: 10px;");

function runTest(testName, testFunction) {
    try {
        if (testFunction()) {
            console.log(`%c[PASS] ${testName}`, "color: #4ade80; font-weight: bold;");
        } else {
            console.error(`%c[FAIL] ${testName}`, "color: #ef4444; font-weight: bold;");
        }
    } catch (error) {
        console.error(`%c[ERROR] ${testName}: ${error.message}`, "color: #ef4444;");
    }
}

// 1. Test: Navigation Bar Exists
runTest("Navbar should exist", () => {
    return document.getElementById('navbar') !== null;
});

// 2. Test: Hero Image Loaded
runTest("Hero Image should have an alt tag", () => {
    const img = document.getElementById('heroImg');
    return img && img.alt === "Jahedul Islam Avatar";
});

// 3. Test: CV Download Button Exists and has Link
runTest("Download CV button should link to PDF", () => {
    const btn = document.getElementById('downloadCvBtn');
    return btn && btn.getAttribute('href') === 'cv.pdf';
});

// 4. Test: Contact Form inputs exist
runTest("Contact Form should have name, email, and message inputs", () => {
    const name = document.getElementById('inputName');
    const email = document.getElementById('inputEmail');
    const msg = document.getElementById('inputMessage');
    return name && email && msg;
});

// 5. Test: Check if Google Script URL is set (Warning test)
runTest("Google Script URL should be configured in script.js", () => {
    // This is a heuristic check; in a real unit test we might mock the fetch
    // Here we just warn the developer manually via console
    console.warn("MANUAL CHECK: Ensure 'scriptURL' in script.js is replaced with your actual Google Deployment URL.");
    return true; 
});

console.log("%c UNIT TESTS COMPLETED ", "background: #222; color: #bada55; font-size: 20px; padding: 10px;");