import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import ButtonFooter from '../components/atoms/Button-twitter-footer'

const Footer = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/footer-bg.png"
        alt="Novum Labs"
        title="Novum Labs"
        layout="fullWidth"
      />
      <div className="hero-container">
        <StaticImage
          src="../assets/images/novum-labs_2hite-2.png"
          alt="Novum Labs"
          title="Novum Labs"
          layout="fullWidth"
          className="logo"
        />
        <div>
          <ButtonFooter title="twitter" link="https://twitter.com/novum_labs" />
          <ButtonFooter title="medium" link="https://medium.com/@novumlabs" />
        </div>
        <p className="copy">© {new Date().getFullYear()} NovumLabs.com</p>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  position: relative;

  .hero-img {
    width: 100%;
    height: 100%;
  }
  .hero-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .logo {
    width: 27.8rem;
    height: 6rem;
  }
  .copy {
    color: var(--clr-grey-2);
    font-size: 2rem;
  }
`
