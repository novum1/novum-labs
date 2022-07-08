import React from 'react'
import styled from 'styled-components'

const Button = ({ title }) => {
  return <Wrapper>{title}</Wrapper>
}

export default Button
const Wrapper = styled.button`
  font-size: 1.6rem;
  padding: 0.4rem 2rem;
  color: var(--clr-black);
  background: var(--clr-orange-1);
  clip-path: polygon(12% 0%, 100% 0%, 85% 100%, 0% 100%);
  border: 0;
  height: 2.5rem;
  transition: var(--transition);

  :hover {
    color: var(--clr-white);
    background: var(--clr-orange-2);
    cursor: pointer;
  }
`
