import { createContext, useContext, useEffect, useState } from "react";
import {
  removeCommonWords,
  removeDuplicates,
  removeShortWords,
  replaceLetter,
  shuffleArray,
} from "../lib/functions";

// Creating context
const GlobalContext = createContext();

// Creating hook
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({ children }) => {
  // States
  const [text, setText] = useState("");
  const [siteLanguage, setSiteLanguage] = useState('ben')
  const [language, setLanguage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [wordList, setWordList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rearrangedArray, setRearrangedArray] = useState([]);
  const [chosenWord, setChosenWord] = useState([]);
  const [blankWord, setBlankWord] = useState([]);
  const [wordColor, setWordColor] = useState('')
  const excludedWord = [
    "a",
    "and",
    "is",
    "am",
    "are",
    "was",
    "can",
    "may",
    "the",
  ];

  console.log("converted word list", wordList);
  console.log("user chosen word", chosenWord);
  console.log("rearranged array", rearrangedArray);
  console.log("blank", blankWord);

  // Word list collected from user

  useEffect(() => {
    // Function for paragraph to word conversion

    const separateWords = (text) => {
      // Replace any punctuation marks with spaces and split the paragraph into an array of words
      setIsLoading(true);
      const wordsArray = text
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
        .split(/\s+/);
      const longWord = removeShortWords(wordsArray);
      const uniqueWords = removeDuplicates(longWord);
      const pureList = removeCommonWords(uniqueWords, excludedWord);
      setWordList(pureList);
      setIsLoading(false);
    };

    separateWords(text);
  }, [text]);

  // Function for creating a rearranges word list

  const rearrangeWords = (chosenWord) => {
    // Check if wordsArray is an array
    if (!Array.isArray(chosenWord)) {
      console.error("Input is not an array");
      return;
    }
    const rearrangedArray = [];

    // Iterate through each word in the input array
    chosenWord.forEach((word) => {
      // Convert the word into an array of characters
      const characters = word.split("");

      // Rearrange the characters of the word twice
      const rearrangedWord1 = shuffleArray(characters).join("");
      const rearrangedWord2 = shuffleArray(characters).join("");

      // Push the rearranged words into the output array
      rearrangedArray.push(rearrangedWord1, rearrangedWord2);
    });

    const shuffleWords = shuffleArray(rearrangedArray);

    setRearrangedArray(shuffleWords);
  };

  // Function for fill in the blanks

  const fillInTheBlankFunction = (words) => {
    let modifiedWords = [];
   

    words.forEach((word) => {
      // Push the modified word into the new array
      modifiedWords.push(replaceLetter(word)); 
      modifiedWords.push(replaceLetter(word)); 
    });
    const shuffleWords = shuffleArray(modifiedWords)
    setBlankWord(shuffleWords);
  };

  console.log(wordColor)
  // Value
  const value = {
    text,
    setText,
    language,
    setLanguage,
    imageUrl,
    wordList,
    setWordList,
    setImageUrl,
    chosenWord,
    setChosenWord,
    isLoading,
    setIsLoading,
    rearrangeWords,
    rearrangedArray,
    setRearrangedArray,
    fillInTheBlankFunction,
    blankWord,
    setBlankWord,
    wordColor, setWordColor,
    siteLanguage, setSiteLanguage
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
