// Sidebar Toggle Function
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var navbarToggler = document.querySelector('.navbar-toggler');

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        navbarToggler.classList.remove("open");
    } else {
        sidebar.style.width = "250px";
        navbarToggler.classList.add("open");
    }
}

// Send Message Function
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addUserMessage(userInput);
    processUserInput(userInput);
    document.getElementById("user-input").value = "";
}

// Add User Message to Chat History
function addUserMessage(message) {
    var chatHistory = document.getElementById("chat-history");
    var userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatHistory.appendChild(userMessage);
}

// Add Assistant Message to Chat History
function addAssistantMessage(message) {
    var chatHistory = document.getElementById("chat-history");
    var assistantMessage = document.createElement("p");
    assistantMessage.classList.add("assistant-message");
    assistantMessage.textContent = message;
    chatHistory.appendChild(assistantMessage);
}

// Process User Input
function processUserInput(input) {
    // Here you can add your logic to respond to user inputs
    // For demonstration, let's just echo back the user's input
    addAssistantMessage("You said: " + input);
}
