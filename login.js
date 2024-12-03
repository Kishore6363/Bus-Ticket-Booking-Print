document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (username === '') {
            showAlert('Error', 'Please enter your username.');
            return;
        }

        if (password === '') {
            showAlert('Error', 'Please enter your password.');
            return;
        }

        // Example login logic
        if (username === 'admin' && password === 'password') {
            showAlert('Success', 'Login successful! Redirecting...', true);
            setTimeout(() => {
                window.location.href = 'dashboard.html'; // Example redirect
            }, 1500);
        } else {
            showAlert('Error', 'Invalid username or password. Please try again.');
        }
    });

    // Custom alert function
    function showAlert(title, message, isSuccess = false) {
        const alertBox = document.createElement('div');
        alertBox.className = `alert-box ${isSuccess ? 'success' : 'error'}`;
        alertBox.innerHTML = `
            <h3>${title}</h3>
            <p>${message}</p>
        `;

        document.body.appendChild(alertBox);

        // Remove alert after 3 seconds
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }
});
