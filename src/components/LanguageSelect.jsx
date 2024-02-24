const LanguageSelect = ({ setLanguage }) => {
  return (
    <div>
      {" "}
      <select
        name="lan"
        id=""
        className="py-1 bg-teal-600 rounded-lg px-4"
        value=""
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option disabled value="">
          Select A Language
        </option>
        <option value="ara">Arabic</option>
        <option value="ben">Bangla</option>
        <option value="eng">English</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
