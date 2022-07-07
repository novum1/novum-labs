import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import LogoWhite from '../components/atoms/logo-white1'
import ButtonMintNow from '../components/atoms/Button-mintnow'
import ButtonTwitter from '../components/atoms/Button-twitter'

const Hero = ({ image }) => {
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
        <ButtonMintNow title="Mint Now" />
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
    top: 39px;
    left: 42px;
    width: 412px;
  }
  .top-button {
    position: absolute;
    right: 64px;
    top: 51px;
  }
  .bottom-left {
    position: absolute;
    bottom: 116px;
    left: 2px;
  }
`
