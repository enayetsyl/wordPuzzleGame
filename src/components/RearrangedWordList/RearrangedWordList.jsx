


import { useGlobalContext } from "../../Context/GlobalContext"
import Button from "../Shared/Button"
import Heading from "../Shared/Heading"
import { getRandomColor, makePdf } from "../../lib/functions"

const RearrangedWordList = () => {
  const {rearrangedArray, language, wordColor} = useGlobalContext()


  return (
    <>
    {
      rearrangedArray?.length > 0 && language !== 'ben' && (
        <div>
      <Heading className='text-center text-xl font-bold'>Below is your rearrange word list</Heading>
      <ul id="image-download" className="space-y-1">
        {
          rearrangedArray?.map((word, idx) => <li key={idx}
          className="uppercase text-xl font-bold"
          >{
            word.split('').map((letter, index) => (
              <span key={index}
              style={{
                color: wordColor === 'mixed' ? getRandomColor() : 'black'
              }}
              >
                {letter}
              </span>
            ))
          }
            
            :
            
            </li>)
        }
        <li className="text-white" >.</li>
      </ul>
        <Button className='bg-purple-600 rounded-lg font-bold text-white'
        onClick={() => makePdf(rearrangedArray,language, "image-download",'Correct Following Words', "Re_arrange", wordColor)}
        >Download</Button>
    </div>
      )
    }
    </>
  )
}

export default RearrangedWordList