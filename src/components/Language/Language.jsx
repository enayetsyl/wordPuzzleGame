import { useGlobalContext } from '../../Context/GlobalContext';
import Button from '../Shared/Button';
import Heading from '../Shared/Heading';

const Language = () => {
  const { siteLanguage, setSiteLanguage } = useGlobalContext();
  return (
    <div className="flex justify-center items-center sm:justify-start">
      <div className="text-end inline-flex justify-end items-center gap-2 bg-primaryBg p-6 rounded-xl">
        <Heading className={`text-sm font-medium`}>
          {siteLanguage ? 'Select Language:' : 'ভাষা নির্ধারণ করুন:'}
        </Heading>
        <Button
          className="px-3 py-2 bg-theme text-white text-sm font-medium"
          onClick={() => setSiteLanguage((prev) => !prev)}
        >
          {siteLanguage ? 'English' : 'বাংলা'}
        </Button>
      </div>
    </div>
  );
};

export default Language;
