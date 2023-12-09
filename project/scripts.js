document.addEventListener('DOMContentLoaded', function () {
    // Login form
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Placeholder for actual login logic
            console.log('Login form submitted.'); // Log to console for debugging
            alert('Login successful!'); // Display an alert message to the user
            window.location.href = 'homePage_postLogin.html';
        });
    }

    // Forgot password form
    var forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Forgot password form submitted.'); // Log to console for debugging
            alert('You will be redirected to reset your password.');
            // Redirect after the alert
            window.location.href = 'retrievenewpassword.html';
        });
    }

    // New password form
    var newPasswordForm = document.getElementById('newPasswordForm');
    if (newPasswordForm) {
        newPasswordForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('New password form submitted.'); // Log to console for debugging
            // Placeholder for actual security check logic
            alert('Your password has been reset successfully. You will be redirected to the login page.');
            // Redirect after the alert
            window.location.href = 'homePage_preLogin.html'; 
        });
    }

    // Registration form
    var registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Registration form submitted.'); // Log to console for debugging
            // Placeholder for actual security check logic
            alert('Account creation successful.');
            // Redirect after the alert
            window.location.href = 'homePage_preLogin.html'; 
        });
    }

    // User role-dependent navbar adjustments
    var userRole = 'betauser'; // Replace with actual logic to determine user role
    var navbar = document.querySelector('.nav-bar nav');
    var coursesDropdownContent = document.getElementById('coursesDropdownContent');
    var userGreeting = document.getElementById('userGreeting');

    if (userGreeting) userGreeting.textContent = `Welcome ${userRole}!`;

    if (userRole === 'sigmauser' || userRole === 'adminuser') {
    // Add 'Advanced' link to the dropdown for Sigma and Admin users
    var advancedCourse = document.createElement('a');
    advancedCourse.href = '#';
    advancedCourse.textContent = 'Advanced';
    coursesDropdownContent.appendChild(advancedCourse);
    }
    if (navbar && userRole === 'adminuser') {
        // Add 'Management' link for Admin users
        var managementLink = document.createElement('a');
        managementLink.href = '#';
        managementLink.textContent = 'Management';
        navbar.appendChild(managementLink);
    }
    });

    // Shared logout function
    function logout() {
        console.log('Login form submitted.'); // Log to console for debugging
        alert('Login successful!'); // Display an alert message to the user
        window.location.href = 'homePage_postLogin.html';
    }
