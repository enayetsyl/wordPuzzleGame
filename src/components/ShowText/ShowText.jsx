import { toast } from 'react-toastify';
import { useGlobalContext } from '../../Context/GlobalContext';
import Heading from '../Shared/Heading';

const ShowText = () => {
  const {
    text,
    wordList,
    isLoading,
    chosenWord,
    setChosenWord,
    language,
    siteLanguage,
  } = useGlobalContext();

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
        !siteLanguage
          ? toast.success(`"${word}" আপনার লিস্টে যুক্ত হয়েছে।`)
          : toast.success(`"${word}" added to your list.`);
      } else {
        // If maximum words are already selected, show a toast message
        !siteLanguage
          ? toast.error(
              `আপনি ${
                maxWordsAllowed === 14 ? '১৪' : '৮'
              } টি শব্দ যুক্ত করেছেন । আর যুক্ত করতে পারবেন না ।`
            )
          : toast.error(
              `You added ${maxWordsAllowed}words. You cannot add more. `
            );
      }
    } else {
      // If the word is already in the chosenWord array, show a toast message
      !siteLanguage
        ? toast.error('শব্দটি ইতিমধ্যে যুক্ত করা হয়েছে। ')
        : toast.error(`Word already add to the list. `);
    }
  };

  return (
    <div className="mx-5 mt-12">
      {/* Heading */}
      {!siteLanguage ? (
        <Heading className="text-center text-xl font-bold">
          নিচে আপনার ছবির লেখা দেয়া আছে
        </Heading>
      ) : (
        <Heading className="text-center text-xl font-bold">
          Your Converted Text
        </Heading>
      )}

      {/* Converted text display div */}
      <div className="my-3 h-32 overflow-auto border-2 rounded-xl border-theme p-4 ">
        {text}
      </div>

      {/* List of word from the image */}
      <div className="mt-12">
        
          <Heading className="text-xl text-center font-bold">
            {
              !siteLanguage ? 'ছবির শব্দের তালিকা' : 'Word List from Image'
            }
          </Heading>
        
        {/* Displaying word list */}
        <div className="border-2 border-theme rounded-xl p-6 overflow-x-hidden overflow-y-auto max-h-[400px] mt-6">
          {!isLoading && (
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {wordList?.map((word) => (
                <li
                  key={word}
                  onClick={() => handleWordClick(word)}
                  className="cursor-pointer font-medium hover:underline hover:text-theme"
                  title="Select Word"
                >
                  {word}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowText;
