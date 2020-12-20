import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import color from './colors';
import background from '../assets/background.png';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }  

  html {
    font-size: 10px;
  }
  
  body {
    min-height: 100vh;

    display: flex;

    color: ${color.black};
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-family: 'Overpass', sans-serif;

    background-image: url(${background});
    background-color: ${color.white};
    
    #root {
      width: 100%;
    }
  }

  ::selection {
    color: ${color.white};
    background-color: ${color.blue};
  }

  :focus {
    outline-color: ${color.blue};
  }
`;

export default GlobalStyle;
