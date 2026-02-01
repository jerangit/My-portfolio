document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Simple toggle styling for mobile would be needed in CSS to show/hide .nav-links
            if(navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.background = '#000';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
            }
        });
    }

    // --- Contact Form to Google Sheets ---
    // PASTE YOUR GOOGLE SCRIPT URL HERE
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzPPriAK3LkH6HwY2CzZfoyoTz1F7EXDkit7tsZV0kbL3L9lK5cxS-JjWZBc36Z93wbpA/exec'; 
    
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Message sent successfully!";
                    submitBtn.innerHTML = "Send Message";
                    submitBtn.disabled = false;
                    setTimeout(function(){ msg.innerHTML = ""; }, 5000);
                    form.reset();
                })
                .catch(error => {
                    msg.style.color = "#ef4444"; // Red
                    msg.innerHTML = "Error! Please check internet.";
                    submitBtn.innerHTML = "Send Message";
                    submitBtn.disabled = false;
                });
        });
    }
});