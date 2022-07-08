import React from 'react'
import styled from 'styled-components'

const Button = ({ title }) => {
  return (
    <Wrapper>
      <div className="btn">{title}</div>
    </Wrapper>
  )
}

export default Button
const Wrapper = styled.button`
  position: relative;
  width: 12rem;
  height: 3rem;
  color: var(--clr-white);
  background: var(--clr-orange-1);
  clip-path: polygon(12% 0%, 100% 0%, 85% 100%, 0% 100%);
  border: 0;

  .btn {
    position: absolute;
    top: 1px;
    left: 2px;
    width: 11.7rem;
    height: 2.8rem;
    font-size: 1.6rem;

    font-family: 'Inter', normal;
    padding-top: 0.3rem;
    text-align: center;
    background: var(--clr-black);
    clip-path: polygon(12% 0%, 99% 0%, 85% 100%, 0% 100%);
    transition: var(--transition);
    :hover {
      background: var(--clr-orange-1);
      cursor: pointer;
    }
  }
`
