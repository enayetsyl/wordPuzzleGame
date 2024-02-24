// import font from './kalpurush-normal.js'; // Import the font data
import html2canvas from "html2canvas";
import jsPDF from "jspdf"
// Function to filter out words less than 3 letters
export const removeShortWords = (wordsArray) => {
  return wordsArray.filter((word) => word.length >= 3);
};

// Filtering out excluded words

export const removeCommonWords = (array1, array2) => {
  return array1.filter((word) => !array2.includes(word));
};

// Remove duplicate words

export const removeDuplicates = (array) => {
  return [...new Set(array)];
};

// Helper function to shuffle an array
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


 // Function to replace a random letter with underscore in a word
 export const replaceLetter = (word) => {
  const index = Math.floor(Math.random() * word.length); // Choose a random index within the word length
  return word.slice(0, index) + "_" + word.slice(index + 1); // Replace the character at the chosen index with '_'
};

// Print pdf



export const makePdf = (rearrangedArray, language, id, title, fileName, wordColor) => {
  const element = document.getElementById(id);
  let yPosition = 10;

  const addImageToPdf = (imageData) => {
      const pdf = new jsPDF();
      pdf.text(title, 10, yPosition);
      const leftPadding = 5;
      pdf.addImage(imageData, 'JPEG', 5 + leftPadding, 20, 200, 220); // adjust position and size as needed
      pdf.save(`${fileName}.pdf`);
  };

  const addTextToPdf = () => {
      const pdf = new jsPDF();
      pdf.text(title, 10, yPosition);
      rearrangedArray.forEach((word, wordIndex) => {
          let currentX = 10; // Initial x position
          const wordLetters = word.split(''); // Split the word into letters
          wordLetters.forEach((letter) => {
              let textColor = 'black'; // Default text color is black
              if (wordColor === 'mixed') {
                  textColor = getRandomColor(); // Get a random color for each letter if wordColor is 'mixed'
              }
              pdf.setTextColor(textColor); // Set text color
              pdf.text(letter.toUpperCase(), currentX, yPosition + (wordIndex + 1) * 10); // Add the letter to PDF
              const letterWidth = pdf.getTextWidth(letter.toUpperCase()); // Get the width of the letter
              currentX += letterWidth; // Update x position based on letter width
          });
      });
      pdf.save(`${fileName}.pdf`);
  };

  if (language === 'ara' || language === 'ben') {
      // Use html2canvas to render the element to a canvas
      html2canvas(element).then(canvas => {
          // Convert canvas to image data
          const imageData = canvas.toDataURL('image/png');
          addImageToPdf(imageData);
      });
  } else if (language === 'eng') {
      addTextToPdf();
  }
};



// Function to generate a random color from an array of colors
export const getRandomColor = () => {
  const colors = ['green', 'blue', 'orange', 'purple'];
  return colors[Math.floor(Math.random() * colors.length)];
};
