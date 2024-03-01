import { useGlobalContext } from '../Context/GlobalContext';
import Language from './Language/Language';

const options = [
  {
    value: 'ara',
    banglaLabel: 'আরবি',
    label: 'Arabic',
  },
  {
    value: 'ben',
    banglaLabel: 'বাংলা',
    label: 'Bangla',
  },
  {
    value: 'eng',
    banglaLabel: 'ইংরেজি',
    label: 'English',
  },
];

const LanguageSelect = ({ setLanguage }) => {
  const { siteLanguage } = useGlobalContext();

  const handleLanguageSelect = (e) => {
    console.log(Language);
    setLanguage(e.target.value);
  };
  return (
    <div>
      <select
        name="lan"
        id=""
        className="py-2.5 bg-white shadow_light bg-opacity-50 rounded-lg px-4"
        value=""
        onChange={(e) => handleLanguageSelect(e)}
      >
        <option hidden>
          {siteLanguage
            ? 'Select Language of Image'
            : 'ছবির লেখার ভাষা নির্ধারণ করুন'}
        </option>
        {options.map((item, i) => {
          return (
            <option value={item.value} key={i} className="text-black p-2">
              {!siteLanguage ? item.banglaLabel : item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LanguageSelect;
