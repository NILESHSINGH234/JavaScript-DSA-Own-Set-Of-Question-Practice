function findHighestOccurringCharacter(str) {
    let maxChar = '';
    let maxCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      let charCount = 0;
      const currentChar = str[i];
      console.log(currentChar);
  
      for (let j = 0; j < str.length; j++) {
        if (str[j] === currentChar) {
          charCount++;
          console.log(charCount);
        }
      }
  
      if (charCount > maxCount) {
        maxChar = currentChar;
        maxCount = charCount;
      }
    }
  
    return maxChar;
  }
  
  // Example usage:
  const inputString = "programming";
  const highestOccurringChar = findHighestOccurringCharacter(inputString);
  console.log(highestOccurringChar); // Output: "g"
  