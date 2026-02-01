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

runTest("Navbar should exist", () => {
    return document.getElementById('navbar') !== null;
});

runTest("Hero Image should have an alt tag", () => {
    const img = document.getElementById('heroImg');
    return img && img.alt.length > 0;
});

runTest("Contact Form should have name, email, and message inputs", () => {
    const name = document.getElementById('inputName');
    const email = document.getElementById('inputEmail');
    const msg = document.getElementById('inputMessage');
    return name && email && msg;
});

runTest("Education Section should exist", () => {
    return document.getElementById('education') !== null;
});
runTest("Achievements Section should exist", () => {
    return document.getElementById('achievements') !== null;
});
runTest("Publications Section should exist", () => {
    return document.getElementById('publications') !== null;
});

console.log("%c UNIT TESTS COMPLETED ", "background: #222; color: #bada55; font-size: 20px; padding: 10px;");
