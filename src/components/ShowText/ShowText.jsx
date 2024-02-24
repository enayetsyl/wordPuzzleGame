import { toast } from "react-toastify";
import { useGlobalContext } from "../../Context/GlobalContext";
import Heading from "../Shared/Heading";

const ShowText = () => {
  const { text, wordList, isLoading, chosenWord, setChosenWord, language} = useGlobalContext();

//  Function to select words

  const handleWordClick = (word) => {
    // Check if the word is already selected
    if (!chosenWord.includes(word)) {
      // Maximum number of words allowed based on the language
      const maxWordsAllowed = language === 'eng' ? 14 : 8;
      
      // Check if the length of chosenWord array is less than the maximum allowed
      if (chosenWord.length < maxWordsAllowed) {
        // If less than the maximum allowed, add the word to the chosenWord array
        setChosenWord([...chosenWord, word]);
      } else {
        // If maximum words are already selected, show a toast message
        toast.error(`আপনি ${maxWordsAllowed === 14 ? '১৪' : '৮'} টি শব্দ যুক্ত করেছেন । আর যুক্ত করতে পারবেন না ।`)
      }
    } else {
      // If the word is already in the chosenWord array, show a toast message
      toast.error("শব্দটি যুক্ত করা হয়েছে। ");
    }
  };
  

  return (
    <div className="mx-5">
      <Heading className="text-center text-xl font-bold">
        Your Converted Text
      </Heading>
      <div className="my-3 h-32 overflow-scroll border border-violet-800">
        {text}
      </div>
      <div>
        <Heading className='text-xl text-center font-bold'>Word List</Heading>
        {
          !isLoading && (
            <ul>
          {wordList?.map((word) => (
            <li key={word}
            onClick={() => handleWordClick(word)}
            className="cursor-pointer"
            >{word}</li>
          ))}
        </ul>
          )
        }

        
      </div>
    </div>
  );
};

export default ShowText;
