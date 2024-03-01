import { ToastContainer } from 'react-toastify';
import UploadSection from './components/UploadSection';
import 'react-toastify/dist/ReactToastify.css';
import ShowText from './components/ShowText/ShowText';
import SelectedWord from './components/SelectedWord/SelectedWord';
import RearrangedWordList from './components/RearrangedWordList/RearrangedWordList';
import BlankWordList from './components/BlankWordList/BlankWordList';
import Language from './components/Language/Language';
import Bulb from './components/Bulb/Bulb';
import { useGlobalContext } from './Context/GlobalContext';
import DeveloperInfo from './components/DeveloperInfo/DeveloperInfo';
import RandomQuranAayat from './components/RandomQuranAayat/RandomQuranAayat';
function App() {
  const { isOn } = useGlobalContext();
  return (
    <div className="relative">
      <Bulb />
      {isOn ? (
        <div className="py-12 md:py-20">
          <div className={`container px-4 mx-auto max-w-[1100px]`}>
            <>
              <Language />
              <UploadSection />
              <ShowText />
              <SelectedWord />
              <RearrangedWordList />
              <BlankWordList />
              {/* <DeveloperInfo /> */}
              {/* <RandomQuranAayat /> */}
            </>
          </div>
        </div>
      ) : (
        <div className="h-[3000px] bg-black"></div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </div>
  );
}

export default App;
