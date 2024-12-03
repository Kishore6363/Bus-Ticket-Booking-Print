// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Validate input fields
        if (!username || !email || !password || !confirmPassword) {
            showAlert('Please fill in all fields!', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showAlert('Invalid email address!', 'error');
            return;
        }

        if (password.length < 6) {
            showAlert('Password must be at least 6 characters!', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showAlert('Passwords do not match!', 'error');
            return;
        }

        showAlert('Sign Up Successful!', 'success');
        form.reset(); // Reset form fields
    });

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Function to display alert messages
    function showAlert(message, type) {
        const alertBox = document.createElement('div');
        alertBox.className = `alert ${type}`;
        alertBox.textContent = message;
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.classList.add('fade-out');
            alertBox.addEventListener('transitionend', () => alertBox.remove());
        }, 3000);
    }
});
