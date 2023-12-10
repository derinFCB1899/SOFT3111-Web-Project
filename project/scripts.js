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
    var userRole = 'adminuser'; // Replace with actual logic to determine user role
    var navbar = document.querySelector('.nav-bar nav');
    var coursesDropdownContent = document.getElementById('coursesDropdownContent');
    var userGreeting = document.getElementById('userGreeting');

    if (userGreeting) userGreeting.textContent = `Welcome ${userRole}!`;

    if (userRole === 'sigmauser' || userRole === 'adminuser') {
    // Add 'Advanced' link to the dropdown for Sigma and Admin users
    var advancedCourse = document.createElement('a');
    advancedCourse.href = 'advancedcoursepage.html';
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

 });

 document.addEventListener('DOMContentLoaded', function () {
    //const userRole = 'adminuser'; // This should be set based on the actual user role
    const forumContainer = document.querySelector('.forum-container');
    const discussionTitle = document.querySelector('.discussion h3');

    // Add lock/unlock functionality
    const lockThreadButton = document.createElement('button');
    lockThreadButton.textContent = '🔒 Lock Thread'; // Assume the thread is initially locked
    lockThreadButton.addEventListener('click', function() {
        if (lockThreadButton.textContent.includes('🔒')) {
            lockThreadButton.textContent = '🔓 Unlock Thread';
            alert('The thread has been unlocked.');
        } else {
            lockThreadButton.textContent = '🔒 Lock Thread';
            alert('The thread has been locked.');
        }
    });
    if (discussionTitle) {
        discussionTitle.prepend(lockThreadButton);
    }

    // Add topic creation functionality for sigmauser
    if (userRole === 'sigmauser' || userRole === 'adminuser') {
        const addTopicButton = document.createElement('button');
        addTopicButton.textContent = 'Add New Topic';
        addTopicButton.addEventListener('click', function() {
            alert('New topic creation functionality coming soon.'); // Placeholder for actual functionality
        });
        forumContainer.prepend(addTopicButton);
    }

    // Add delete functionality for adminuser
    if (userRole === 'adminuser') {
        document.querySelectorAll('.user-comment, .topics-list li').forEach(item => {
            const deleteButton = document.createElement('span');
            deleteButton.innerHTML = '⛔';
            deleteButton.style.cursor = 'pointer';
            deleteButton.addEventListener('click', function() {
                if (confirm('Are you sure you want to delete this item?')) {
                    item.remove();
                    alert('The item has been deleted.');
                }
            });
            item.prepend(deleteButton);
        });
    }

    // Post reply functionality
    const postButton = document.querySelector('.reply-box button');
    if (postButton) {
        postButton.addEventListener('click', function() {
            const replyBox = document.querySelector('.reply-box input');
            if (replyBox && replyBox.value.trim() !== '') {
                alert('Your reply has been posted.');
                replyBox.value = ''; // Clear the input field
            } else {
                alert('Please enter a reply.');
            }
        });
    }
});