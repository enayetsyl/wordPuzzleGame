import { useGlobalContext } from "../../Context/GlobalContext"
import Button from "../Shared/Button"
import Heading from "../Shared/Heading"

const Language = () => {
  const {siteLanguage, setSiteLanguage} = useGlobalContext()
  return (
    <div>
      {
        siteLanguage === 'ben' ? (
          <>
      <Heading>Select Language</Heading>
      <Button
      className='px-3 py-2 bg-orange-600 text-white'
      onClick={() => setSiteLanguage('eng')}
      >English</Button>
          </>
        ) : (
          <>
          <Heading>ভাষা নির্ধারণ করুন </Heading>
      <Button
      className='px-3 py-2 bg-orange-600 text-white'
      onClick={() => setSiteLanguage('ben')}
      >বাংলা</Button>
          </>
        )
      }
    </div>
  )
}

export default Language