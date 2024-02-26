import { ToastContainer } from "react-toastify";
import UploadSection from "./components/UploadSection";
import "react-toastify/dist/ReactToastify.css";
import ShowText from "./components/ShowText/ShowText";
import SelectedWord from "./components/SelectedWord/SelectedWord";
import RearrangedWordList from "./components/RearrangedWordList/RearrangedWordList";
import BlankWordList from "./components/BlankWordList/BlankWordList";
import Language from "./components/Language/Language";
import Bulb from "./components/Bulb/Bulb";
import { useGlobalContext } from "./Context/GlobalContext";
function App() {
  const {isOn} = useGlobalContext()
  return (
    <>
    <Bulb/>
      <div 
      className={isOn ? "" : "text-black bg-black z-20"}
      // className={`bg-${isOn ? "gray-800 " : "white"} text-${isOn ? "white" : "black"} ${isOn ? "dark" : ""}`}
      
      >
      {
        isOn ? (<>
        <Language />
      <UploadSection />
      <ShowText />
      <SelectedWord />
      <RearrangedWordList />
      <BlankWordList />
        </>) : (<div className="h-[3000px] bg-black"></div>)
      }
      
      </div>

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
    </>
  );
}

export default App;
