import React from 'react'
import styled from 'styled-components'

const Button = ({ title }) => {
  return (
    <Wrapper>
      <div className="button">{title}</div>
      <div className="shape"></div>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  position: relative;
  .button {
    font-size: 32px;
    padding: 10px;
    position: absolute;
    right: 45px;
    top: 0%;
    color: var(--clr-black);
    background: var(--clr-white);
    clip-path: polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%);
    border: 1px solid var(--clr-black);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 246px;
    height: 64px;
    transition: var(--transition);

    :hover {
      color: var(--clr-white);
      background: var(--clr-orange-1);
    }
    :active {
      border: 3px solid var(--clr-white);
      filter: polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%);
    }
  }
  .shape {
    position: absolute;
    right: 0;
    top: 0%;
    width: 58px;
    height: 64px;
    background: var(--clr-orange-1);
    clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%);
  }
`
