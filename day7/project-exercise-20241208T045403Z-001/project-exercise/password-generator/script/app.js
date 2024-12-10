letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];


// // Solution for Easy Method

function generatePassword() {
    let password = ""; // Changed from "passwords" to "password"
    let allCharacters = [...letters, ...numbers, ...symbols];
    let passwordLength = prompt("Enter the length of the password you want:");

    // Handle cases where the user cancels the prompt or inputs invalid length
    if (passwordLength === null) {
        console.log("Password generation was cancelled.");
        return null;
    }

    passwordLength = Number(passwordLength); // Ensure it's a number

    // Validate password length
    if (isNaN(passwordLength) || passwordLength <= 0) {
        console.error("Invalid password length. Please enter a positive number.");
        return null;
    }

    // Generate the password
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

let generatedPassword = generatePassword();
if (generatedPassword) {
    console.log("Generated Password:", generatedPassword);
} else {
    console.log("No password generated.");
}

// Solution for Hard Method