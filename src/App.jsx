import { ToastContainer } from 'react-toastify'
import UploadSection from './components/UploadSection'
import 'react-toastify/dist/ReactToastify.css';
import ShowText from './components/ShowText/ShowText';
import SelectedWord from './components/SelectedWord/SelectedWord';
import RearrangedWordList from './components/RearrangedWordList/RearrangedWordList';
import BlankWordList from './components/BlankWordList/BlankWordList';
import Language from './components/Language/Language';
function App() {
  

  return (
    <>
    <Language/>
    <UploadSection/>
    <ShowText/>
    <SelectedWord/>
    <RearrangedWordList/>
    <BlankWordList/>
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
transition: Bounce
/>
    </>
  )
}

export default App
