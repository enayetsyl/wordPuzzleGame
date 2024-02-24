


import { useGlobalContext } from "../../Context/GlobalContext"
import Button from "../Shared/Button"
import Heading from "../Shared/Heading"
import { getRandomColor, makePdf } from "../../lib/functions"

const RearrangedWordList = () => {
  const {rearrangedArray, language, wordColor, siteLanguage} = useGlobalContext()


  return (
    <>
    {
      rearrangedArray?.length > 0 && language !== 'ben' && (
        <div>
      {/* Heading */}
      {
        siteLanguage === 'ben' ? (
          <Heading className='text-center text-xl font-bold'>নিচে আপনার এলোমেলো করা শব্দ দেয়া হল </Heading>
        ) : (
          <Heading className='text-center text-xl font-bold'>Below is your rearrange word list</Heading>
        )
      }
      {/* Rearranged Word list */}
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

        {/* Download button */}

        <Button className='bg-purple-600 rounded-lg font-bold text-white'
        onClick={() => makePdf(rearrangedArray,language, "image-download",'Correct Following Words', "Re_arrange", wordColor)}
        >
          {
            siteLanguage === 'ben' ? 'ডাউনলোড করুন' : 'Download'
          }
          </Button>
    </div>
      )
    }
    </>
  )
}

export default RearrangedWordList