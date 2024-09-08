document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm-email');
    const errorDiv = document.getElementById('email-error');
    const submitButton = document.getElementById('submit-button');
    let confirmEmailBlurred = false;

    function setErrorState() {
        errorDiv.textContent = "The email addresses entered do not match. Please try again.";
        errorDiv.style.display = 'block';
        email.style.border = '2px solid red';
        confirmEmail.style.border = '2px solid red';
        submitButton.disabled = true;
    }

    function clearErrorState() {
        errorDiv.style.display = 'none';
        email.style.border = '';
        confirmEmail.style.border = '';
        submitButton.disabled = false;
    }

    function validateEmails() {
        if (email.value.toLowerCase() !== confirmEmail.value.toLowerCase()) {
            setErrorState();
            return false;
        } else {
            clearErrorState();
            return true;
        }
    }

    confirmEmail.addEventListener('blur', function() {
        if (!confirmEmailBlurred) {
            confirmEmailBlurred = true;
            validateEmails();
        }
    });

    [email, confirmEmail].forEach(field => {
        field.addEventListener('input', function() {
            if (confirmEmailBlurred) {
                validateEmails();
            }
        });
    });

    form.addEventListener('submit', function(event) {
        if (!validateEmails()) {
            event.preventDefault();
        }
    });
});