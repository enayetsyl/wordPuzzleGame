import convertor from "../lib/convertor";
import { useRef } from "react";
import { useGlobalContext } from "../Context/GlobalContext";
import Heading from "./Shared/Heading";
import LanguageSelect from "./LanguageSelect";
import Button from "./Shared/Button";
import { toast } from "react-toastify";

const UploadSection = () => {
  // useRef hook for div
  const imageInputRef = useRef(null);

  // Import from global context
  const {  setText, language, setLanguage, imageUrl, setImageUrl, setChosenWord, isLoading,
    setIsLoading,setRearrangedArray,
    setBlankWord, siteLanguage } =
    useGlobalContext();


  // Linking div with useRef
  const openBrowseImage = () => {
    imageInputRef.current.click();
  };

  // Handle click functionality
  const handleClick = () => {
    // validation
    if (!language) {
      siteLanguage === 'ben' ? toast.error("দয়া করে ছবিতে কি ভাষা আছে তা সিলেক্ট করুন ।")
      : toast.error('Please select a language of the picture text.')

      return;
    }
    if (!imageUrl) {
      siteLanguage === 'ben' ? toast.error("দয়াকরে একটি ছবি যুক্ত করুন । ") :
      toast.error('Please add a picture')
      return;
    }
    setChosenWord([])
    setBlankWord([])
    setRearrangedArray([])
    setIsLoading(true)
    // sending data to convertor.js file for conversion
    convertor(imageUrl, language).then((text) => {
      // Setting the text returned from convertor to text state.
      setText(text);
      setIsLoading(false)
    });
  };

  return (
    <div className="m-5">
      
      {/* Page heading */}
      {
        siteLanguage === 'ben' ? (<Heading className="text-center font-bold text-3xl">
        ছবি থেকে শব্দে পরিবর্তন 
      </Heading>) : (<Heading className="text-center font-bold text-3xl">
        Image to word converter
      </Heading>)
      }
      
      {/* Image upload section */}
      <div className="my-3">
        <Heading className="text-lg my-2">
          Select the language of image file
        </Heading>
      {/* Language select option */}
        <LanguageSelect setLanguage={setLanguage} />

      {/* Showing selected language  */}
        {language && (
          <>
           {
            siteLanguage === 'ben' ? (
             <p>
               আপনার ছবির ভাষা -   
              <span className="text-purple-600">
                {(language === "ara" &&  "আরবি") ||
                (language === "ben" && "বাংলা") ||
                (language === "eng" && "ইংরেজি")}
              </span>
             </p>
            ) :
            (
              <p>
               Your selected language is -   
              <span className="text-purple-600">
                {(language === "ara" && "Arabic") ||
                (language === "ben" && "Bangla") ||
                (language === "eng" && "English")}
              </span>
             </p>
            )
           }
            
          </>
        )}

      </div>
          {/* Input tag for upisLoading image */}
      <input
        type="file"
        ref={imageInputRef}
        hidden
        required
        onChange={(e) => {
          if (e.target.files) {
            const url = URL.createObjectURL(e.target.files[0]);
            setImageUrl(url);
          }
        }}
      />
      <div
        onClick={openBrowseImage}
        className="h-20 border-2 border-purple-700 text-orange-500 flex justify-center items-center"
      >
        {
          siteLanguage === 'ben' ? (
            <h1>ছবি আপলোড করতে এখানে ক্লিক করুন । </h1>
            ) : (
              <h1>Click Here to upload image</h1>
          )
        }
      </div>

        {/* Convert button */}

      <div className="text-center my-2">
        {
          isLoading ? <Button
          className="bg-purple-700 font-bold text-white"
          disabled
        >
          {
            siteLanguage === 'ben' ? 'অপেক্ষা করুন লোড হচ্ছে' : 'Loading Wait'
          }
        </Button> :<Button
          className="bg-purple-700 font-bold text-white"
          onClick={handleClick}
        >
           {
            siteLanguage === 'ben' ? 'প্রসেস করুন' : 'Convert'
          }
          
        </Button>
        }
      </div>
    </div>
  );
};

export default UploadSection;
