import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
`
export const Container = styled.div`
z-index: 1;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 15px;
padding-left: 15px;

@media screen and (max-width: 991px) {
  padding-right: 50px;
  padding-left: 50px;
}

@media screen and (max-width: 460px) {
  padding-right: 50px;
  padding-left: 50px;
}
`

export const Button = styled.button`
border-radius: 4px;
background: ${({lightLabel}) => (lightLabel ? '#0000FF' : '#fff') };
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px') };
color: ${({lightLabel}) => (lightLabel ? '#fff': '#FFA500')};
font-size: ${({bigFont}) => (bigFont ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
border-radius: 30px;
text-transform: uppercase;
font-weight: 700;
letter-spacing: 2px;
width: 80%;

&:hover {
  transition: all 0.3s ease-out;
  border: ${({lightLabel}) => (lightLabel ? '2px solid #fff' : '2px solid #ADD8E6') 
}};

@media screen and (max-width: 960px) {
  width: 100%;
};

@media screen and (max-width: 460px) {
  width: 100%;
};
`


export default GlobalStyle;