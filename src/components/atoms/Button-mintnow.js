import React from 'react'
import styled from 'styled-components'

const Button = ({ title }) => {
  return (
    <Wrapper>
      <div className="btn-container">
        <div className="btn">{title}</div>
      </div>
      <div className="shape"></div>
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.div`
  display: flex;

  .btn-container {
    position: relative;
    background: var(--clr-white);
    width: 24.6rem;
    height: 6.4rem;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    transition: var(--transition);
    :hover {
      background: var(--clr-orange-1);
      cursor: pointer;
    }
    :active {
      background: var(--clr-white);
    }
  }
  .btn {
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    width: 23.8rem;
    height: 5.6rem;
    text-align: center;
    font-size: 3.2rem;
    line-height: 3.4rem;
    padding: 1rem;
    color: var(--clr-black);
    background: var(--clr-white);
    clip-path: polygon(10% 0%, 99% 0%, 90% 100%, 1% 100%);
    transition: var(--transition);

    :hover {
      color: var(--clr-white);
      background: var(--clr-orange-1);
    }
  }
  .shape {
    margin-left: -1rem;
    width: 5rem;
    height: 6.4rem;
    background: var(--clr-orange-1);
    clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%);
  }
`
