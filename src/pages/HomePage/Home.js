import { InfoSection } from '../.././components/InfoSection/InfoSection'
import {homeObjOne, homeObjTwo} from './Data'
import {Footer} from '../.././components/Footer/Footer'
import { NavBar } from '../.././components/Navbar/NavBar'
const Home = () => {
  
  return(
    <div>
    
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Footer/>
    </div>
    )
}

export default Home;