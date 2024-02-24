import { useGlobalContext } from "../../Context/GlobalContext"
import { getRandomColor, makePdf } from "../../lib/functions"
import Button from "../Shared/Button"
import Heading from "../Shared/Heading"

const BlankWordList = () => {
  const {blankWord, language, wordColor} = useGlobalContext()
  return (
    <>
    {
      blankWord?.length > 0 && (
        <div>
      <Heading className='text-center text-xl font-bold'>Below is your fill in the blank word list</Heading>
      <ul id="gap-download">
      {blankWord?.map((word, idx) => (
              <li key={idx} className="text-2xl font-bold uppercase">
                {word.split('').map((letter, index) => (
                  <span key={index} style={{ color: wordColor === 'mixed' ? getRandomColor() : 'black' }}>{letter}</span>
                ))}
                :
              </li>
            ))}
        <li className="text-white">.</li>
      </ul>
      
        <Button className='bg-purple-600 rounded-lg font-bold text-white'
        onClick={() => makePdf(blankWord,language, "gap-download",'Fill the word', "Fill_in_the_blank", wordColor)}
        >Download</Button>
    </div>
      )
    }
    </>
  )
}

export default BlankWordList