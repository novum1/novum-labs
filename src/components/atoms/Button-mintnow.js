import React from 'react'
import styled from 'styled-components'

const Button = ({ title, toggle }) => {
  return (
    <Wrapper onClick={toggle}>
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
  :hover {
    cursor: pointer;
    .btn-container {
      background: var(--clr-orange-1);
    }
    .btn {
      color: var(--clr-white);
      background: var(--clr-orange-1);
    }
  }
  :active {
    .btn-container {
      background: var(--clr-white);
    }
  }

  .btn-container {
    position: relative;
    background: var(--clr-white);
    width: 24.6rem;
    height: 6.4rem;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    transition: var(--transition);
  }
  .btn {
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    width: 23.8rem;
    height: 5.6rem;
    text-align: center;
    font-family: 'Bebas Neue Bold';
    letter-spacing: 0.3rem;
    font-size: 3.2rem;
    line-height: 3.4rem;
    padding-top: 1.6rem;
    color: var(--clr-black);
    background: var(--clr-white);
    clip-path: polygon(10% 0%, 99% 0%, 90% 100%, 1% 100%);
    transition: var(--transition);
  }
  .shape {
    margin-left: -0.5rem;
    width: 6rem;
    height: 6.4rem;
    background: var(--clr-orange-1);
    clip-path: polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%);
  }
`
