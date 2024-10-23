const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Event listener for Enter key to send message
userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage(); // Call sendMessage function on Enter key press
    }
});

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput === '') return;

    // Display the user's message
    displayMessage('You', userInput);

    // Generate a chatbot response
    generateBotResponse(userInput);

    // Clear the input field
    document.getElementById('userInput').value = '';
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the latest message
}
// Smooth scrolling to contact section
document.querySelector('.gmail-link').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

function generateBotResponse(input) {
    let botResponse = '';

    // Simple chatbot responses
    if (input.toLowerCase().includes('hello')) {
        botResponse = 'Hello! How can I help you today?';
    } else if (input.toLowerCase().includes('skill')) {
        botResponse = 'I have skills in C, C++, Python, Java, and web development.';
    } else if (input.toLowerCase().includes('contact')) {
        botResponse = 'You can contact me at kanistokevin007@gmail.com or 81220 77950.';
    } 
    else if (input.toLowerCase().includes('name')) {
        botResponse = 'I\'m kanisto kevin';
    } 
    else if (input.toLowerCase().includes('tips')) {
        botResponse = 'Sometimes even if you know how something is gonna end,that doesn\'t mean you can\'t enjoy the ride';
    }
    else if (input.toLowerCase().includes('saaptya')) {
        botResponse = 'ahn sapte sapte neenga saaptingila?';
    }
    else if (input.toLowerCase().includes('saapten')) {
        botResponse = 'cool';
    }
    else if (input.toLowerCase().includes('hobbies')) {
        botResponse = 'badminton,football,music';
    }
    else {
        botResponse = "I'm not sure how to respond to that. Try asking about my skills, projects, or contact information.";
    }

    // Display the chatbot's response
    displayMessage('Bot', botResponse);
}
