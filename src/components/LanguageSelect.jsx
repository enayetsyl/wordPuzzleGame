import { useGlobalContext } from "../Context/GlobalContext";

const LanguageSelect = ({ setLanguage }) => {
  const {siteLanguage} = useGlobalContext()
  return (
    <div>
      {
        siteLanguage === 'ben' ? (
<select
        name="lan"
        id=""
        className="py-1 bg-teal-600 rounded-lg px-4"
        value=""
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option disabled value="">
          ছবির লেখার ভাষা নির্ধারণ করুন 
        </option>
        <option value="ara">আরবি </option>
        <option value="ben">বাংলা</option>
        <option value="eng">ইংরেজি</option>
      </select>
        )  : (
          <select
        name="lan"
        id=""
        className="py-1 bg-teal-600 rounded-lg px-4"
        value=""
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option disabled value="">
          Select Language of Image
        </option>
        <option value="ara">Arabic</option>
        <option value="ben">Bangla</option>
        <option value="eng">English</option>
      </select>
        )
      }
     
    </div>
  );
};

export default LanguageSelect;
