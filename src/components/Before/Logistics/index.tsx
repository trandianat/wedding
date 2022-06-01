import {
  ceremony,
  cocktails,
  events,
  eventsContent,
  intro,
  introContent,
  introImg,
  introText,
  reception,
} from 'components/Before/Logistics/styles';

export const Logistics = (): JSX.Element => (
  <main>
    <section css={intro}>
      <div css={introContent}>
        <div css={introImg}>asdf</div>
        <div css={introText}>
          <h2>The Beans are getting married!</h2>
          <div className="divider" />
          <strong>Date</strong>
          <p>Location</p>
          <p>Address</p>
        </div>
      </div>
    </section>
    <section css={events}>
      <div css={eventsContent}>
        <div css={ceremony}>Ceremony</div>
        <div css={cocktails}>Cocktails</div>
        <div css={reception}>Reception</div>
      </div>
    </section>
  </main>
);
