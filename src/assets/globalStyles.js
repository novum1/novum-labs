import { createGlobalStyle } from 'styled-components'
import device from './device'

const GlobalStyle = createGlobalStyle`

/*
=============== 
Variables
===============
*/
:root {
 
  
  --clr-green-dark: hsl(125, 67%, 35%);
  --clr-red-dark: hsl(356, 80%, 46%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-black: #000000;
  --clr-white: #fff;
  --clr-orange-1: #ff7112;
  --clr-orange-2: #FF3D12;
  --clr-white-transparency-8: rgba(255, 255, 255, 0.8);
  --ff-primary:  "Helvetica Neue", Helvetica, Arial, sans-serif;
  
  --ff-secondary: "Open Sans", sans-serif;
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
}

body {
  font-family: var(--ff-primary);
  background-color: var(--clr-black);
  color: #fff;
  line-height: 1.5;
  font-size: 2.4rem;
  
}

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
