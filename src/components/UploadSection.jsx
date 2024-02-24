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
    setBlankWord } =
    useGlobalContext();


  // Linking div with useRef
  const openBrowseImage = () => {
    imageInputRef.current.click();
  };

  // Handle click functionality
  const handleClick = () => {
    // validation
    if (!language) {
      toast.error("দয়া করে ছবিতে কি ভাষা আছে তা সিলেক্ট করুন ।");
      return;
    }
    if (!imageUrl) {
      toast.error("দয়াকরে একটি ছবি যুক্ত করুন । ");
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
      
      <Heading className="text-center font-bold text-3xl">
        Image to word converter
      </Heading>
      {/* Image upload section */}
      <div className="my-3">
        <Heading className="text-lg my-2">
          Select the language of image file
        </Heading>
      {/* Language select option */}
        <LanguageSelect setLanguage={setLanguage} />

      {/* Showing selected language  */}
        {language && (
          <p>
            Your selected language is -   
            <span className="text-purple-600">
              {(language === "ara" && "Arabic") ||
              (language === "ben" && "Bangla") ||
              (language === "eng" && "English")}
            </span>
            
          </p>
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
        Click Here to upload file
      </div>

        {/* Convert button */}

      <div className="text-center my-2">
        {
          isLoading ? <Button
          className="bg-purple-700 font-bold text-white"
          disabled
        >
          Loading Wait
        </Button> :<Button
          className="bg-purple-700 font-bold text-white"
          onClick={handleClick}
        >
          Convert
        </Button>
        }
      </div>
    </div>
  );
};

export default UploadSection;
