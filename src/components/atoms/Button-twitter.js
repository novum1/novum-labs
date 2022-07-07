import React from 'react'
import styled from 'styled-components'

const Button = ({ title }) => {
  return <Wrapper>{title}</Wrapper>
}

export default Button
const Wrapper = styled.button`
  font-size: 16px;
  padding: 2px 15px;
  color: var(--clr-black);
  background: var(--clr-orange-1);
  clip-path: polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  height: 25px;
  transition: var(--transition);

  :hover {
    color: var(--clr-white);
    background: var(--clr-orange-2);
  }
`
