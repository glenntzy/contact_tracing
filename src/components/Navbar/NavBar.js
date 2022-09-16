import { Nav, NavBarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItems, NavLinks, NavBtnLink, NavItemsBtn
} from './NavbarElements';
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import {Container, Button} from '../../globalStyles'

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [closeMobileMenu, setCloseMobileMenu] = useState(false);
  
  const handleClick = () => {
    setClick(!click);
  }
  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    }
    else {
      setButton(true)
    }
  };
  
  useEffect(() => {
    showButton();
  }, []);
  
  window.addEventListener('resize', showButton);
  return (
    <div style={{position: "fixed", width: "100%"}}>
    <Nav>
    <NavBarContainer>
    <NavLogo to = "/"><NavIcon/>UniTrace</NavLogo>
    <MobileIcon onClick={() => handleClick()}> {click ? <FaTimes/> : <FaBars/>} </MobileIcon>
    <NavMenu onClick={handleClick} click ={click}>
     <NavItems>
      <NavLinks to="/"> Home </NavLinks>
     </NavItems>
     <NavItems>
      <NavLinks to="/about"> About </NavLinks>
     </NavItems>
     <NavItems>
      <NavLinks to="/services"> Services</NavLinks>
     </NavItems>
 
    </NavMenu>
    
    
    </NavBarContainer>
    </Nav>
    </div>
    )
}
