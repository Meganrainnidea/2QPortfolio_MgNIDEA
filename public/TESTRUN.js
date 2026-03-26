/*
    Princess Chronicles Login System
    Demonstrates popup modal and simple client-side data use.
*/

const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Close popup
closeBtn.onclick = () => {
    overlay.style.display = "none";
};

// Login logic
document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // Save user
    localStorage.setItem("userEmail", email);

    message.textContent = "Welcome Princess! Redirecting...";
    message.style.color = "green";

    setTimeout(() => {
        window.location.href = "public/3rdQtrAssessments/TESTRUN.html";
    }, 1500);

});
