import React from 'react'
import styled from 'styled-components'
import cards from '../../constants/home-cards'

const List = () => {
  return (
    <Wrapper className="section">
      {cards.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="image">{item.image}</div>
            <h2>{item.title}</h2>
            <p>{item.text1}</p>
            <p>{item.text2}</p>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default List

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  .card {
    width: 40rem;
  }
  .image {
    border-bottom: 1.2rem solid var(--clr-orange-1);
  }
  h2 {
    font-size: 4.8rem;
    line-height: 4.8rem;
    margin-top: 4rem;
    font-style: normal;
    height: 12.4rem;
  }
  p {
    color: var(--clr-grey);
  }
`
