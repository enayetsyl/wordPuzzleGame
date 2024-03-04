import { toast } from 'react-toastify';
import { useGlobalContext } from '../../Context/GlobalContext';
import Button from '../Shared/Button';
import Heading from '../Shared/Heading';

const SelectedWord = () => {
  const {
    chosenWord,
    rearrangeWords,
    fillInTheBlankFunction,
    setChosenWord,
    language,
    setWordColor,
    siteLanguage,
  } = useGlobalContext();

  // Function to handle removal of a word
  const handleRemove = (wordToRemove) => {
    // Filter out the word to be removed from the chosenWord array
    const updatedChosenWord = chosenWord.filter(
      (word) => word !== wordToRemove
    );
    // Update the chosenWord array
    setChosenWord(updatedChosenWord);

    !siteLanguage
      ? toast.success(`"${wordToRemove}" আপনার তালিকা থেকে সরানো হয়েছে।`)
      : toast.success(`"${wordToRemove}" is removed from the list.`);
  };

  // Onclick handler for rearranging letters of words
  const handleRearrange = () => {
    rearrangeWords(chosenWord);
  };

  // On click handler for creating fill in the blanks

  const handleFillInTheBlank = () => {
    fillInTheBlankFunction(chosenWord);
  };

  return (
    <div className="mx-5">
      {/* Heading */}
      <Heading className="my-3 text-xl text-center font-bold mt-12">
        {
          !siteLanguage ? 'উপরের তালিকা থেকে নির্বাচিত শব্দ':'Selected words from above list'
        }
      </Heading>
    

      {/* Showing words that user selected */}
      <div className="border-2 border-theme rounded-xl p-6 overflow-x-hidden overflow-y-auto max-h-[400px] mt-6">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {chosenWord &&
            chosenWord?.map((word) => (
              <li
                key={word}
                onClick={() => handleRemove(word)}
                className="cursor-pointer font-medium hover:underline hover:text-theme"
                title="Remove from here."
              >
                {word}
              </li>
            ))}
        </ul>
      </div>

      {/* Color picker option */}
      {chosenWord?.length > 0 && (
        <>
        <div className="mt-6">
              <h1 htmlFor="" className="font-medium text-xl">
              {!siteLanguage ?  'অক্ষরের রঙ নির্বাচন করুন :' : ' Select color for the letters:'}
              </h1>
              <div className="flex gap-x-4 my-1">
                <label htmlFor="black">
                  <input
                    type="radio"
                    name="color"
                    id="black"
                    onClick={() => setWordColor('black')}
                  />
                  {!siteLanguage ?  ' কালো :' : ' Black'}
                </label>
                <label htmlFor="mixed">
                  <input
                    type="radio"
                    name="color"
                    id="mixed"
                    onClick={() => setWordColor('mixed')}
                  />
                  {!siteLanguage ?  ' রঙিন :' : ' Mixed'}
                </label>
              </div>
            </div>
         
          {/* Fill in the blanks button */}

          <Button
            className="text-lg text-white font-bold my-6 mr-3"
            onClick={handleFillInTheBlank}
          >
            {!siteLanguage ? 'শূন্যস্থান' : 'Blank'}
          </Button>
        </>
      )}

      {language !== 'ben' &&
        chosenWord?.length > 0 &&
        <Button
            className="text-lg text-white font-bold"
            onClick={handleRearrange}
          >
           {
              !siteLanguage ? "এলোমেলো" : " Rearrange"
            }
          </Button>
        }
    </div>
  );
};

export default SelectedWord;
