import { useGlobalContext } from "../../Context/GlobalContext";
import Button from "../Shared/Button";
import Heading from "../Shared/Heading";
import { getRandomColor} from "../../lib/functions";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const RearrangedWordList = () => {
  const { rearrangedArray, language, wordColor, siteLanguage } =
    useGlobalContext();
  const rearrangeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => rearrangeRef.current,
    documentTitle: "rearranged-word",
  });

  return (
    <>
      {rearrangedArray?.length > 0 && language !== "ben" && (
        <div className="my-8">
          {/* Heading */}
          {!siteLanguage ? (
            <Heading className="text-center text-xl font-bold">
              নিচে আপনার এলোমেলো করা শব্দ দেয়া হল{" "}
            </Heading>
          ) : (
            <Heading className="text-center text-xl font-bold">
              Below is your rearrange word list
            </Heading>
          )}
          {/* Rearranged Word list */}
          <ul
            id="image-download"
            className="space-y-1  border-2 border-theme  my-4 rounded-xl p-4 tracking-wider text-2xl"
            ref={rearrangeRef}
          >
            {rearrangedArray?.map((word, idx) => (
              <li key={idx} className="uppercase text-xl font-bold">
                {word.split("").map((letter, index) => (
                  <span
                    key={index}
                    style={{
                      color: wordColor === "mixed" ? getRandomColor() : "black",
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

          {/* Download button */}

          <Button
            className="rounded-lg font-bold text-white"
            // onClick={() =>
            //   makePdf(
            //     rearrangedArray,
            //     language,
            //     'image-download',
            //     'Correct Following Words',
            //     'Re_arrange',
            //     wordColor
            //   )
            // }
            onClick={handlePrint}
          >
            {siteLanguage === "ben" ? "ডাউনলোড করুন" : "Download"}
          </Button>
        </div>
      )}
    </>
  );
};

export default RearrangedWordList;
