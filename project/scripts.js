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
        managementLink.href = 'adminpanel.html';
        managementLink.textContent = 'Management';
        navbar.appendChild(managementLink);
    }
    });

    // Shared logout function
    function login() {
        console.log('Login form submitted.'); // Log to console for debugging
        alert('Login successful!'); // Display an alert message to the user
        window.location.href = 'homePage_postLogin.html';
    }

    function logout() {
        console.log('Login form submitted.'); // Log to console for debugging
        alert('Stay SIGMA!'); // Display an alert message to the user
        window.location.href = 'homePage_postLogin.html';
    }

   // JavaScript for quiz submission and modal
    document.addEventListener('DOMContentLoaded', function () {
    // Get the modal
    var modal = document.getElementById("confirmationModal");

    // Get the button that opens the modal
    var btn = document.getElementById("quizForm");

    // Get the element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    if (btn) {
        btn.addEventListener('submit', function(event) {
            event.preventDefault();
            modal.style.display = "block";
        });
    }

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // When the user clicks on "Yes", close the modal and show alert
    document.getElementById('confirmSubmit').onclick = function() {
        modal.style.display = "none";
        alert('Your responses have been submitted.');
        // Here you would typically handle the submission, like sending it to a server
    };

    // When the user clicks on "No", close the modal
    document.getElementById('cancelSubmit').onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Function for handling the quiz submission and displaying the confirmation modal
    function handleQuizSubmission() {
        var quizForm = document.getElementById('quizForm');
        var confirmationModal = document.getElementById('confirmationModal');

        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();
            confirmationModal.style.display = 'block';
        });

        // Confirm submission within the modal
        document.getElementById('confirmSubmit').addEventListener('click', function() {
            disableForm(quizForm);
            confirmationModal.style.display = 'none';
            alert('Your responses have been submitted.');
            showProgress();
        });

        // Cancel submission within the modal
        document.getElementById('cancelSubmit').addEventListener('click', function() {
            confirmationModal.style.display = 'none';
        });

        // Close modal when clicking on <span> (x)
        document.getElementsByClassName('close')[0].addEventListener('click', function() {
            confirmationModal.style.display = 'none';
        });

        // Close the modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target == confirmationModal) {
                confirmationModal.style.display = 'none';
            }
        });
    }

    // Call the quiz submission handler
    handleQuizSubmission();

     // Get the quiz form and the overlay elements
     var quizForm = document.getElementById('quizForm');
     var quizOverlay = document.getElementById('quizOverlay');
     var progressBar = document.getElementById('progressBar');
     var successMessage = document.getElementById('successMessage');
 
     // Listen for the quiz form submission
     quizForm.addEventListener('submit', function(event) {
         event.preventDefault(); // Prevent actual form submission
 
         // Show the overlay
         quizOverlay.style.display = 'flex';
 
         // Disable the form inputs
         var inputs = quizForm.getElementsByTagName('input');
         for (var i = 0; i < inputs.length; i++) {
             inputs[i].disabled = true;
         }
 
         // Update the progress bar
         progressBar.style.width = '100%';
 
         // Optionally, scroll the user to the top of the quiz section
         quizForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
     });

     function createCourse() {
        // Assuming your form has an id of 'newContentForm'
        const form = document.getElementById('newContentForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('New content submitted!');
            // Here you would typically send form data to a server
        });
    }
    
    // Call this function when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', createCourse);
 });
