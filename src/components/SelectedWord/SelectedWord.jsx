import { toast } from "react-toastify";
import { useGlobalContext } from "../../Context/GlobalContext";
import Button from "../Shared/Button";
import Heading from "../Shared/Heading";

const SelectedWord = () => {
  const {
    chosenWord,
    rearrangeWords,
    fillInTheBlankFunction,
    setChosenWord,
    language,
    wordColor,
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

    siteLanguage === "ben"
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
    <div>
      {/* Heading */}

      {siteLanguage === "ben" ? (
        <Heading className="my-3 text-xl text-center font-bold">
          উপরের তালিকা থেকে নির্বাচিত শব্দ
        </Heading>
      ) : (
        <Heading className="my-3 text-xl text-center font-bold">
          Selected words from above list
        </Heading>
      )}

      {/* Showing words that user selected */}
      <div>
        <ul>
          {chosenWord &&
            chosenWord?.map((word) => (
              <li
                key={word}
                onClick={() => handleRemove(word)}
                className="cursor-pointer"
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
          {
            siteLanguage === 'ben' ? (
              <div>
            <h1 htmlFor="">অক্ষরের রঙ নির্বাচন করুন । </h1>
            <label htmlFor="black">
              <input
                type="radio"
                name="color"
                id="black"
                onClick={() => setWordColor("black")}
              />
              কালো
            </label>
            <label htmlFor="mixed">
              <input
                type="radio"
                name="color"
                id="mixed"
                onClick={() => setWordColor("mixed")}
              />
              রঙিন 
            </label>
          </div>
            ) : (
              <div>
            <h1 htmlFor="">
              Select color for the letters.</h1>
            <label htmlFor="black">
              <input
                type="radio"
                name="color"
                id="black"
                onClick={() => setWordColor("black")}
              />
              Black
            </label>
            <label htmlFor="mixed">
              <input
                type="radio"
                name="color"
                id="mixed"
                onClick={() => setWordColor("mixed")}
              />
              Mixed
            </label>
          </div>
            )
          }
{/* Fill in the blanks button */}
         {
          siteLanguage === 'ben' ? (
            <Button
            className="text-lg text-white font-bold bg-violet-600"
            onClick={handleFillInTheBlank}
          >
            শূন্যস্থান 
          </Button>
          ) : (
            <Button
            className="text-lg text-white font-bold bg-violet-600"
            onClick={handleFillInTheBlank}
          >
            Fill in the Blank
          </Button>
          )
         }
        </>
      )}
      {language !== "ben" && chosenWord?.length > 0 && (
        siteLanguage === 'ben' ? (
          <Button
          className="text-lg text-white font-bold bg-violet-600"
          onClick={handleRearrange}
        >
          এলোমেলো
        </Button>
        ) : (
          <Button
          className="text-lg text-white font-bold bg-violet-600"
          onClick={handleRearrange}
        >
          Rearrange
        </Button>
        )
      )}
    </div>
  );
};

export default SelectedWord;
