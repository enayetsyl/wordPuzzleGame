import convertor from '../lib/convertor';
import { useRef } from 'react';
import { useGlobalContext } from '../Context/GlobalContext';
import Heading from './Shared/Heading';
import LanguageSelect from './LanguageSelect';
import Button from './Shared/Button';
import { toast } from 'react-toastify';

const UploadSection = () => {
  // useRef hook for div
  const imageInputRef = useRef(null);

  // Import from global context
  const {
    setText,
    language,
    setLanguage,
    imageUrl,
    setImageUrl,
    setChosenWord,
    isLoading,
    setIsLoading,
    setRearrangedArray,
    setBlankWord,
    siteLanguage,
  } = useGlobalContext();

  // Linking div with useRef
  const openBrowseImage = () => {
    imageInputRef.current.click();
  };

  // Handle click functionality
  const handleClick = () => {
    // validation
    if (!language) {
      siteLanguage
        ? toast.error('Please select a language of the picture text.')
        : toast.error('দয়া করে ছবিতে কি ভাষা আছে তা সিলেক্ট করুন ।');

      return;
    }
    if (!imageUrl) {
      siteLanguage
        ? toast.error('Please add a picture')
        : toast.error('দয়াকরে একটি ছবি যুক্ত করুন । ');
      return;
    }
    setChosenWord([]);
    setBlankWord([]);
    setRearrangedArray([]);
    setIsLoading(true);
    // sending data to convertor.js file for conversion
    convertor(imageUrl, language).then((text) => {
      // Setting the text returned from convertor to text state.
      setText(text);
      setIsLoading(false);
    });
  };

  return (
    <div className="m-5">
      {/* Page heading */}

      <Heading className="text-center font-bold text-3xl md:text-4xl capitalize mb-12">
        {siteLanguage ? 'Image to word converter' : 'ছবি থেকে শব্দে পরিবর্তন'}
      </Heading>

      {/* Image upload section */}
      <div className="my-3 flex flex-col md:flex-row items-center justify-between gap-2 bg-primaryBg p-6 rounded-xl">
        {/* <Heading className="text-lg my-2">
          {siteLanguage
            ? 'Select the language of image file:'
            : 'ছবির ভাষা নির্ধারণ করুনঃ'}
        </Heading> */}
        {/* Language select option */}
        <LanguageSelect setLanguage={setLanguage} />

        {/* Showing selected language  */}
        {language && (
          <>
            {!siteLanguage ? (
              <p>
                আপনার ছবির ভাষা:
                <span className="text-theme font-bold">
                  {(language === 'ara' && ' আরবি') ||
                    (language === 'ben' && ' বাংলা') ||
                    (language === 'eng' && ' ইংরেজি')}
                </span>
              </p>
            ) : (
              <p>
                Your selected language is: 
                <span className="text-theme font-bold"> 
                  {(language === 'ara' && ' Arabic') ||
                    (language === 'ben' && ' Bangla') ||
                    (language === 'eng' && ' English')}
                </span>
              </p>
            )}
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
        className="h-36 border-2 border-theme text-theme font-bold flex justify-center items-center rounded-xl hover:bg-theme hover:bg-opacity-10 duration-300 hover:cursor-pointer"
      >
        
          <h1 className='text-center'>
            {
!siteLanguage ? 'ছবি আপলোড করতে এখানে ক্লিক করুন ।' : 'Click here to upload image.'
            }
            </h1>
       
      </div>

      {/* Convert button */}
      <div className="text-center my-2">
        {isLoading ? (
          <Button className="font-bold text-white" disabled>
            {!siteLanguage ? 'লোড হচ্ছে' : 'Loading Wait'}
          </Button>
        ) : (
          <Button className="font-bold text-white" onClick={handleClick}>
            {!siteLanguage ? 'প্রসেস করুন' : 'Convert'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default UploadSection;
