import { createGlobalStyle } from 'styled-components'
import device from './device'
import fBebas from './fonts/BebasNeue Regular.ttf'
import fInter from './fonts/Inter Regular.ttf'
const GlobalStyle = createGlobalStyle`

/*
============
Fonts
============
*/
@font-face {
    font-family: 'Bebas Neue';
    src: local('Bebas Neue'),
         url('${fBebas}') format('truetype');
}
@font-face {
    font-family: 'Inter';
    src: local('Inter'),
         url('${fInter}') format('truetype');
}


/*
=============== 
Variables
===============
*/
:root {
  --clr-black: #000000;
  --clr-white: #fff;
  --clr-orange-1: #ff7112;
  --clr-orange-2: #FF3D12;
  --clr-grey: #888888;
  --clr-grey-2: #A5A5A5;
  --ff-primary:  "Arial", normal;
  --ff-secondary: 'Bebas Neue';
  
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 117rem;
  --fixed-width: 70rem;
}


/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
   /* This defines what 1rem is */
  font-size: 22.5%; 

  @media ${device.mobileL} {
      font-size: 35%; 
  }
  @media ${device.tablet} {
    font-size: 41.25%; 
  }
  @media ${device.laptop} {
      font-size: 47.5%; 
  }
  @media ${device.laptopL} {
      font-size: 53.75%; 
  }
  @media ${device.desktop} {
      font-size: 62.5%; /* 1 rem = 10px; 10px/16px = 62.5% */
  }
  @media ${device.desktopL} {
      font-size: 100%; 
  }
}

body {
  font-family: var(--ff-primary);
  background-color: var(--clr-black);
  color: var(--clr-white);
  line-height: 1.5;
  font-size: 2.4rem;
  
}

h1,
h2,
h3,
h4 {font-family: var(--ff-secondary); font-weight: 400;}
p {
  margin-bottom: 2.4rem;  
}

.section {
  width: 90vw;
  max-width: 128rem;
  margin: 0 auto 4rem;
}

`
export default GlobalStyle
