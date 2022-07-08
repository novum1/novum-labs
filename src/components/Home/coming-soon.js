import React from 'react'
import styled from 'styled-components'

const Coming = ({ isOpen }) => {
  return (
    <Wrapper>
      <div className={isOpen ? 'coming show' : 'coming'}>
        <div className="left"></div>
        <h1>Coming Soon</h1>
        <div className="right"></div>
      </div>
    </Wrapper>
  )
}

export default Coming

const Wrapper = styled.aside`
  h1 {
    width: 35%;
    margin-left: -2%;
    background: var(--clr-orange-1);
    height: 17.4rem;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    display: flex;
    place-items: center;
    justify-content: center;
    font-size: 6.4rem;
    font-style: normal;
    font-weight: 400;
  }
  .left {
    height: 17.4rem;
    width: 35%;
    background: var(--clr-orange-1);
    clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
  }
  .right {
    height: 17.4rem;
    margin-left: -2%;
    width: 35%;
    background: var(--clr-orange-1);
    clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  .coming {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: flex;
    place-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);
  }

  .show {
    opacity: 1;
    transform: translateX(0);
  }
`
