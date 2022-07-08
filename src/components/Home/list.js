import React from 'react'
import styled from 'styled-components'
import cards from '../../constants/home-cards'

const List = () => {
  return (
    <Wrapper className="section">
      {cards.map((item) => {
        return (
          <div key={item.id} className="card">
            <div>{item.image}</div>
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
  p {
    color: #888888;
  }
`
