import React from 'react'
import styled from 'styled-components'

const Paragraph = () => {
  return (
    <Wrapper className="section">
      <div className="scroll-container">
        <div className="scroll-text">
          <p>
            <b>2034:</b> Natural disasters and nuclear war made Earth
            uninhabitable.
          </p>
          <p>
            Citizens of all nations had no choice but to escape to the Metaverse
            to seek better lives.
          </p>
          <p>
            At first, life returned to normal: a thriving economy and peace
            amongst the masses.
          </p>
          <p>
            However, things began to change. The same mistakes that doomed the
            physical world repeated themselves in the digital world.
          </p>
          <p>
            A totalitarian regime took control and imposed draconian
            restrictions, enslaving the masses.
          </p>
          <p>
            But all was not lost. A small but fearsome coalition of leaders from
            business, technology, and military forged an enterprise in
            retaliation against the oppression.
          </p>
          <h3>Novum Labs was born.</h3>
          <p>
            It would provide resources to arm the resistance and give them the
            tools they needed to defend themselves against these tyrants.
          </p>
          <p>
            Novum created a decentralized system of factories, laboratories, and
            training facilities that produced digital commodities and new forms
            of technology that gave citizens the equipment and intelligence
            needed to survive.
          </p>
          <p>
            Hidden in the shadows, the leadership’s identities and whereabouts
            are known to no one. But that hasn’t stopped the warlords from
            tirelessly hunting them for decades.
          </p>
          <p>
            Despite mortal threats, they continue to distribute these resources
            through a network of elite fighters and revolutionaries throughout
            the world.
          </p>
        </div>
      </div>
      <h2>
        Genesis Collection:{' '}
        <span className="subtitle">
          Kingpin Compound.<span className="white-shape">--</span>
        </span>
      </h2>
      <p>
        The first offering in the NL collection was originally designed as a
        hideout for X75.
      </p>
      <p>X75 is the most lethal asset in the Novum Labs (NL) network.</p>
      <p>
        Loud-mouthed, insubordinate, and draped in audacious attire: his
        presence was that of a has-been, stripped bare of any dignity and pride.
        Then, a series of events and a trigger would awaken him, unearthing the
        god within.
      </p>
      <p>
        Due to the bounty on his head, he was provided with a state-of-the-art
        facility for safety and a place of respite while he awaited orders for
        his next mission.
      </p>

      <p>
        Armed with weapons, vehicles, and his trusted guard dog CZ, he’s well
        equipped for the chaos thrown his way.{' '}
      </p>

      <p>
        Each one of his most important assets will be available in the genesis
        collection and is compatible with all Loot Pods in the CloneX ecosystem.{' '}
      </p>

      <p>
        They’re the perfect set of accessories for all the other outlaws in the
        Metaverse looking to fortify their digital dwellings.
      </p>
    </Wrapper>
  )
}

export default Paragraph

const Wrapper = styled.div`
  .scroll-container {
    height: 28rem;
    overflow: hidden;
  }
  .scroll-text {
    height: 100%;
    animation: slideUp linear 55s infinite;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    20% {
      opacity: 1;
    }
    100% {
      transform: translateY(-330%);
    }
  }
  h2 {
    text-align: center;
    margin: 5rem 0;
    font-family: var(--font-primary);
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.6rem;
  }
  h3 {
    margin: 5rem 0;
    font-family: var(--font-primary);
    font-size: 3rem;
    font-weight: 700;
  }
  .subtitle {
    background: var(--clr-orange-1);
    clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
    padding: 1rem 1.5rem 1rem 2.5rem;
  }
  .white-shape {
    background: var(--clr-white);
    margin-left: 1rem;
    clip-path: polygon(55% 0%, 100% 0%, 65% 70%, 20% 70%);
  }
`
