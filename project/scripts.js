// This is for the login page
document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    // Placeholder for actual login logic
    alert('Login successful!');
    window.location.href = 'homePage_postLogin.html';
});

// This is for the forgot password page
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event){
    event.preventDefault();
    alert('You will be redirected to reset your password.');
    // Redirect after the alert
    window.location.href = 'retrievenewpassword.html';
});

// This is for the retrieve new password page
document.getElementById('newPasswordForm').addEventListener('submit', function(event){
    event.preventDefault();
    // Placeholder for actual security check logic
    alert('Your password has been reset successfully. You will be redirected to the login page.');
    // Redirect after the alert
    window.location.href = 'homePage_preLogin.html'; 
});

// This is for the retrieve new password page
document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault();
    // Placeholder for actual security check logic
    alert('Account creation successful.');
    // Redirect after the alert
    window.location.href = 'homePage_preLogin.html'; 
});

var userRole = 'betauser'; // Replace with the desired user role

document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    var navbar = document.querySelector('.nav-bar nav');
    var userGreeting = document.getElementById('userGreeting');

    // Personalized welcome message based on the user role.
    function setWelcomeMessage(role) {
        userGreeting.textContent = `Welcome ${role}!`;
    }

    // Dynamically add a link to the navbar
    function addNavbarLink(href, text) {
        let link = document.createElement('a');
        link.href = href;
        link.textContent = text;
        navbar.appendChild(link);
    }

    // Function to check if the user has a specific role and add corresponding links
    function addUserRoleLinks(role) {
        if (role === 'sigmauser' || role === 'adminuser') {
            addNavbarLink('#', 'Advanced Courses');
        }
        if (role === 'adminuser') {
            addNavbarLink('#', 'Management');
        }
    }

    // Initialize the page
    setWelcomeMessage(userRole);
    addUserRoleLinks(userRole);
});

// Function for logout
function logout() {
    alert('Logging out...');
    window.location.href = 'homePage_preLogin.html';
}