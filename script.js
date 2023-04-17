function findFirstNonRepeatedCharacter() {
  // Prompt the user for input
  const inputString = prompt("Please enter a string:");

  // Create an object to store the count of each character
  const charCount = {};

  // Loop through each character in the string and count its occurrences
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Loop through each character in the string again and return the first one with a count of 1
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (charCount[char] === 1) {
      // Use an alert to display the result to the user
      alert(`${inputString}${char}`);
      return;
    }
  }

  // If no non-repeated character is found, use an alert to display an error message to the user
  alert(${inputString});
}

// Call the function
findFirstNonRepeatedCharacter();





