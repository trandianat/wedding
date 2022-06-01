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
} from 'components/before/logistics/styles';
import Ceremony from 'assets/icons/ceremony';
import Drinks from 'assets/icons/drinks';
import Reception from 'assets/icons/reception';

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
        <div css={ceremony}>
          <Ceremony />
          <h2>Ceremony</h2>
          <p>Time</p>
          <p>Location</p>
        </div>
        <div css={cocktails}>
          <Drinks />
          <h2>Cocktail Hour</h2>
          <p>Time</p>
          <p>Location</p>
        </div>
        <div css={reception}>
          <Reception />
          <h2>Reception</h2>
          <p>Time</p>
          <p>Location</p>
        </div>
      </div>
    </section>
  </main>
);
