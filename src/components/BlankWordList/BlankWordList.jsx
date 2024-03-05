import { useRef } from 'react';
import { useGlobalContext } from '../../Context/GlobalContext';
import { getRandomColor, makePdf } from '../../lib/functions';
import Button from '../Shared/Button';
import Heading from '../Shared/Heading';
import  { useReactToPrint } from 'react-to-print';

const BlankWordList = () => {
  const { blankWord, language, wordColor, siteLanguage } = useGlobalContext();

  const blankWordRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => blankWordRef.current,
    documentTitle: "blank-word",
  })

  return (
    <>
      {blankWord?.length > 0 && (
        <div>
          {/* Heading  */}
          {!siteLanguage ? (
            <Heading className="text-center text-xl  font-bold">
              নিচে শূন্যস্থানসহ শব্দ দেয়া হল{' '}
            </Heading>
          ) : (
            <Heading className="text-center text-2xl  font-bold">
              Below is your fill in the blank word list
            </Heading>
          )}

          <ul
            id="gap-download"
            className="mt-6 border-2 border-theme rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
            ref={blankWordRef}
          >
            {blankWord?.map((word, idx) => (
              <li key={idx} className="text-2xl font-bold uppercase tracking-[8px]">
                {word.split('').map((letter, index) => (
                  <span
                    key={index}
                    style={{
                      color: wordColor === 'mixed' ? getRandomColor() : 'black',
                    }}
                  >
                    {letter}
                  </span>
                ))}
                
              </li>
            ))}
            <li className="text-white">.</li>
          </ul>

          <Button
            className="mt-6 font-bold text-white"
            onClick={handlePrint
            }
          >
            {siteLanguage === 'ben' ? 'ডাউনলোড করুন' : 'Download'}
          </Button>
        </div>
      )}
    </>
  );
};

export default BlankWordList;
