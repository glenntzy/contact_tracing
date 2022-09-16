import styled from 'styled-components'
import {Container, Button} from '../../globalStyles'
import {Link} from 'react-router-dom'
import { FaMagento } from 'react-icons/fa'
import {BiQrScan} from 'react-icons/bi'

export const Nav = styled.nav`
background: #FFA500;
height: 80px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
top: 0;
left: 0;
right: 0;
z-index: 999;
`

export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
max-width: 1300px;
margin: 0 auto 0 auto;
padding: 0 50px 0 50px;

@media screen and (max-width: 991px) {
  padding-right: 50px;
  padding-left: 50px;
}

@media screen and (max-width: 460px) {
  padding-right: 15px;
  padding-left: 15px;
}
`

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(BiQrScan)`
margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 80px;
  left: ${({click}) => (click ? 0 : '-100%')};
  align-items: center;
  opacity: 1;
  transition: all 0.5s ease;
  background: #FFA500;
  padding-right: 20px;
}
`

export const NavItems = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
  border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px) {
  width: 100%;
  
  &:hover {
    border: none;
  }
}
`

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center; 
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
  
  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
  }
}
`

export const NavItemsBtn = styled.li`
@media screen and (max-width: 960px) {
display: flex; 
justify-content: 
center; 
align-items: center; 
width: 100%; 
height: 120px
`

export const NavBtnLink = styled(Link)`
display: flex; 
justify-content: center; 
align-items: center; 
text-decoration: none; 
padding: 8px 16px; 
height: 100%; 
width: 100%; 
border: none; 
outline: none;
`
