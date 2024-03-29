import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const RandomQuranAayat = () => {
  const [quran, setQuran] = useState(null);
  const [ayat, setAyat] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const getQuran = () => {
    fetch("quran.json")
      .then((res) => res.json())
      .then((data) => {
        setQuran(data.quran);
        getRandomAyat(data.quran);
      });
  };

  const getRandomAyat = (quranData) => {
    if (!quranData) return;
    const randomIndex = Math.floor(Math.random() * quranData.length);
    const randomAyat = quranData[randomIndex];
    setAyat(randomAyat);
    setModalOpen(true); // Open modal
  };

  useEffect(() => {
    getQuran();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomAyat(quran);
    }, 60000); // Reopen modal every 30 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [quran]);

  useEffect(() => {
    if (modalOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [modalOpen]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="container">
        <p></p>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-[600px]">
            <h1 className=" font-bold mb-4  whitespace-normal">{ayat?.text}</h1>
            <p className="text-gray-700">{`${ayat?.chapter} : ${ayat?.verse}`}</p>
            <button
              onClick={handleModalClose}
              className="mt-4 bg-theme hover:bg-[#f1c40f] hover:text-white text-white font-bold py-2 px-6 rounded duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomQuranAayat;
