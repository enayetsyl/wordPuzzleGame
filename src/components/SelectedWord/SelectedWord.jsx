import { useGlobalContext } from "../../Context/GlobalContext";
import Button from "../Shared/Button";
import Heading from "../Shared/Heading";

const SelectedWord = () => {
  const { chosenWord, rearrangeWords, fillInTheBlankFunction, setChosenWord, language, wordColor, setWordColor } = useGlobalContext();

  // Function to handle removal of a word
  const handleRemove = (wordToRemove) => {
    // Filter out the word to be removed from the chosenWord array
    const updatedChosenWord = chosenWord.filter(word => word !== wordToRemove);
    // Update the chosenWord array
    setChosenWord(updatedChosenWord);
  };

  const handleRearrange = () => {
    rearrangeWords(chosenWord)
  }

  const handleFillInTheBlank = () =>{
    fillInTheBlankFunction(chosenWord)
  }
  return (
    <div>
      <Heading className="my-3 text-xl text-center font-bold">
        Select words from above
      </Heading>

      <div>
        <ul>
          {chosenWord && chosenWord?.map((word) => <li key={word}
          onClick={() => handleRemove(word)}
          className="cursor-pointer"
          title="Remove from here." 
          >{word}</li>)}
        </ul>
      </div>
      {
        chosenWord?.length > 0 && 
          (
          <>
      <div>
        <h1 htmlFor="">Which color do you want for the words.</h1>
        <label htmlFor="black">
    <input type="radio" name="color" id="black" 
    onClick={()=> setWordColor('black')}
    />
    Black
  </label>
  <label htmlFor="mixed">
    <input type="radio" name="color" id="mixed" 
    onClick={()=> setWordColor('mixed')}
    />
    Mixed
  </label>
      </div>
          
          <Button className='text-lg text-white font-bold bg-violet-600'
          onClick={handleFillInTheBlank}
          >Fill in the Blank</Button>
          </>
          )
        
      }
      {
        language !== 'ben' && chosenWord?.length > 0 && (
          <Button className='text-lg text-white font-bold bg-violet-600'
          onClick={handleRearrange}
          >Rearrange</Button>
        )
      }
    </div>
  );
};

export default SelectedWord;
