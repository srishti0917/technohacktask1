ocument.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const messageElement = document.getElementById('message');

    if (password !== confirmPassword) {
        messageElement.textContent = "Passwords do not match!";
        messageElement.style.color = "red";
    } else {
        messageElement.textContent = "Registration successful!";
        messageElement.style.color = "green";
        // Here you can add code to handle the registration (e.g., sending data to a server)
    }
});
