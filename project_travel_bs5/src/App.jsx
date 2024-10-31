import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import CustomCarousel from './Components/CustomCarousel'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Destinations from './Components/Destinations'

const App = () => {
  return (
    <div>
      <Navbar />
      <CustomCarousel />
      <MainContent />
      <Destinations/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
