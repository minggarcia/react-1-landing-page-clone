/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Founder from './images/original_500.jpeg';
import Testimonials from './images/testimonial_1.png';

const testimonialStyle = css`
  margin: 100px 180px;
  background: #efe9db;
  color: #2b3c42;
  border-radius: 5px;
  padding: 60px;
  p {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 30px;
    line-height: 160%;
  }
  img {
    margin-right: 20px;
    filter: grayscale(40%);
    height: 50px;
  }
  span {
    font-style: italic;
    opacity: 0.8;
  }
`;
const topHeader = css`
  font-size: 64px;
  color: #0a0f10;
  font-weight: 900;
  text-align: center;
  line-height: 110%;
`;

const founderWords = css`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  gap: -80px;
  p {
    display: block;
    font-size: 22px;
    line-height: 180%;

    color: #2b3c42;
    margin: 0 170px;
  }
  img {
    height: 280px;
    width: 280px;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    margin: 0 auto;
    margin-right: 260px;
  }
  span {
    font-weight: bold;
  }
`;

const freeTrialStyle = css`
  flex-flow: column;
  padding-bottom: 80px;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  padding-right: 20px;
  border-radius: 5px;
  display: flex;
  background: #314252;
  padding-left: 20px;
  padding-top: 80px;
  margin: 50px 180px;
  h2 {
    font-size: 32px;
    color: white;
    line-height: 140%;
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    font-size: 22px;
    color: #b4b8bb;
    line-height: 160%;
    max-width: 800px;
    text-align: center;
    margin-bottom: 40px;
  }
  button {
    color: #fff;
    background: #e66a69;
    padding: 20px 80px;
    height: auto;
    font-weight: 700;
    font-size: 22px;
    border: transparent;
    border-bottom: 5px solid hsl(0.4, 63.8%, 56.7%);
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  span {
    color: #5e7182;
  }
`;

export default function Testimonial() {
  return (
    <div>
      <div css={testimonialStyle}>
        <p>
          “ I've used both spreadsheets and other CRM systems but after trying
          Wobaka I see no way of going back. It's easy to use and I save hours
          on email every day.”
        </p>
        <img src={Testimonials} alt="testimonial" />
        <span>Lisa, Co-Founder Lopplistan</span>
      </div>
      <section css={topHeader}>
        Start using a CRM that works
        <br /> for you, not against you
      </section>
      <section css={founderWords}>
        <div>
          <p>
            Hey 👋 I'm Fredrik, the founder of Wobaka.
            <br />
            <br />
            Why make another CRM? Well, there are a gazillion of CRM systems out
            there and I've personally tried many of them. While some of them may
            be a great way for managers to track things, few help you be more
            productive in sales. What?{' '}
            <span>
              Yep, and that's because they focus on the wrong things, such as
              advanced report sheets, complex user and contact hierarchies,
              website builders and 97 other things you don't need.
            </span>
            <br />
            <br />
            So what do you do? You start using spreadsheets, todo lists and a
            bunch of other tools instead and important information ends up all
            over the place.
            <br /> <br />
            We're here to change that.
            <span>
              {' '}
              We believe CRM systems should be as simple to use as spreadsheets
              but still give you superpowers. Wobaka is the CRM system that has
              all you need, and nothing you don't.
            </span>
            <br />
            <br />I use Wobaka myself every day and I hope it'll help you close
            more deals as well!
            <br />
            <br />
            <div style={{ fontStyle: 'italic' }}>— Fredrik, Founder Wobaka</div>
          </p>
        </div>
        <div>
          <img src={Founder} alt="founder" />
        </div>
      </section>

      <section css={freeTrialStyle}>
        <h2>Switch to Wobaka in under 15 minutes</h2>
        <p>
          Forget about CRM systems that include webpage builders, blog engines
          and 97 other features you don't need. We made Wobaka to help you enjoy
          sales and accomplish more Victory hand.
        </p>
        <button>Try it for free</button>
        <span>14 day free trial, no credit card required.</span>
      </section>
    </div>
  );
}
