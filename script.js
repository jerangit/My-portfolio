document.addEventListener('DOMContentLoaded', () => {
    window.openTab = function(tabName) {
        const tabLinks = document.getElementsByClassName("tab-links");
        const tabContents = document.getElementsByClassName("tab-contents");
        
        for(let tabLink of tabLinks) {
            tabLink.classList.remove("active-link");
        }
        for(let tabContent of tabContents) {
            tabContent.classList.remove("active-tab");
        }
        
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab");
    }

    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    if(localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }

    if(themeIcon){
        themeIcon.onclick = function() {
            body.classList.toggle("light-mode");
            if(body.classList.contains("light-mode")) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
                localStorage.setItem("theme", "light");
            } else {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
                localStorage.setItem("theme", "dark");
            }
        }
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

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
                    msg.style.color = "#ef4444"; 
                    msg.innerHTML = "Error! Please check internet.";
                    submitBtn.innerHTML = "Send Message";
                    submitBtn.disabled = false;
                });
        });
    }
});
