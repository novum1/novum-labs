import React from 'react'
import styled from 'styled-components'

const Paragraph = () => {
  return (
    <Wrapper className="section">
      <p>
        Once his eyes had grown used to the sight, Wang could see that the faint
        red background was indeed pulsing. The entire sky flickered, as if the
        universe was but a quivering lamp in the wind.
      </p>
      <p>
        Standing under the flashing dome of the night sky, Wang suddenly felt
        the universe shrink until it was so small that only he was imprisoned in
        it. The universe was a cramped heart, and the red light that suffused
        everything was the translucent blood that filled the organ. Suspended in
        the blood, he saw that the flickering of the red light was not
        periodic—the pulsing was irregular. He felt a strange, perverse, immense
        presence that could never be understood by human intellect.
      </p>

      <h2>
        Genesis Collection:{' '}
        <span className="subtitle">
          Kingpin Compound.<span className="white-shape">--</span>
        </span>
      </h2>

      <p>
        Another sixty thousand Trisolaran hours went by. Twenty thousand
        Trisolaran hours after the completion of the huge particle accelerator
        in space, the unfolding of the proton into two dimensions was about to
        begin in a synchronous orbit around Trisolaris.
      </p>
      <p>
        It was a beautiful and mild Stable Era day. The sky was particularly
        clear.Like the day when the fleet had set sail eighty thousand
        Trisolaran hours ago, the entire population of Trisolaris looked up into
        the sky, gazing at that giant ring. The princeps and all the consuls
        again came and stood under the Pendulum Monument. The pendulum had long
        stopped, and the weight hung still like a solid rock between the tall
        pillars. Looking at it, it was hard to believe that it had once moved.
      </p>
    </Wrapper>
  )
}

export default Paragraph

const Wrapper = styled.div`
  h2 {
    text-align: center;
    margin: 15rem 0 10rem;
    font-family: var(--font-primary);
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.6rem;
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
