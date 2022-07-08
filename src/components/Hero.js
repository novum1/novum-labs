import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import LogoWhite from '../components/atoms/logo-white1'
import ButtonMintNow from '../components/atoms/Button-mintnow'
import ButtonTwitter from '../components/atoms/Button-twitter'

const Hero = ({ image, toggleComing, isOpen }) => {
  console.log({ isOpen })
  return (
    <Wrapper>
      <GatsbyImage
        image={getImage(image)}
        alt="Novum Labs"
        className="hero-img"
        placeholder="tracedSVG"
        layout="constrained"
      />
      <div className="top-logo">{LogoWhite}</div>
      <div className="top-button">
        <ButtonMintNow title="Mint Now" toggle={toggleComing} />
      </div>
      <div className="bottom-left">
        <ButtonTwitter title="Twitter" />
        <ButtonTwitter title="Mirror.xyz" />
      </div>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.header`
  position: relative;

  .hero-img {
    width: 100%;
    height: 100%;
  }

  .top-logo {
    position: absolute;
    top: 3.9rem;
    left: 4.2rem;
    width: 41.2rem;
  }
  .top-button {
    position: absolute;
    right: 6.4rem;
    top: 5.1rem;
  }
  .bottom-left {
    position: absolute;
    bottom: 11.6rem;
    left: 0.5rem;
  }
`
