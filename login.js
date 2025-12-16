document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messageElement = document.getElementById('message');

    // Basic Validation
    if (username === "" || password === "") {
        messageElement.style.color = "red";
        messageElement.textContent = "Please enter both username and password.";
    } else {
        messageElement.style.color = "green";
        messageElement.textContent = "Login successful! (Simulation)";
        console.log("User logged in:", username);
    }
});
