import { useGlobalContext } from '../../Context/GlobalContext';
import { getRandomColor, makePdf } from '../../lib/functions';
import Button from '../Shared/Button';
import Heading from '../Shared/Heading';

const BlankWordList = () => {
  const { blankWord, language, wordColor, siteLanguage } = useGlobalContext();
  return (
    <>
      {blankWord?.length > 0 && (
        <div>
          {/* Heading  */}
          {!siteLanguage ? (
            <Heading className="text-center text-2xl  font-bold">
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
          >
            {blankWord?.map((word, idx) => (
              <li key={idx} className="text-2xl font-bold uppercase">
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
                :
              </li>
            ))}
            <li className="text-white">.</li>
          </ul>

          <Button
            className="mt-6 font-bold text-white"
            onClick={() =>
              makePdf(
                blankWord,
                language,
                'gap-download',
                'Fill the word',
                'Fill_in_the_blank',
                wordColor
              )
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
