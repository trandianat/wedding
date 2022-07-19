import {
  events,
  eventsBorder,
  eventsContent,
  faqContent,
  faqs,
  faqText,
  faqTitle,
  green,
  greenBorder,
  greenContent,
  intro,
  introContent,
  introDetails,
  introImg,
  introText,
  roomAlternatives,
  roomBlock,
  roomDivider,
  rooms,
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
          <p>
            Whoa, marriage? YES! And we'd love for you to be there to celebrate
            with us!
          </p>
          <div css={introDetails}>
            <p>
              <strong>
                Saturday, July 8<sup>th</sup>, 2023
              </strong>
            </p>
            <p>Bedford Village Inn</p>
            <p>2 Olde Bedford Way, Bedford, NH 03110</p>
          </div>
        </div>
      </div>
    </section>
    <section css={events}>
      <div css={eventsBorder}>
        <div css={eventsContent}>
          <div>
            <Ceremony />
            <h2>Ceremony</h2>
            <p>5pm - 5:30pm</p>
            <p>Courtyard Gardens</p>
          </div>
          <div>
            <Drinks />
            <h2>Cocktail Hour</h2>
            <p>5:30pm - 6:30pm</p>
            <p>Barn Gardens</p>
          </div>
          <div>
            <Reception />
            <h2>Reception</h2>
            <p>6:30pm - 11pm</p>
            <p>Great Hall</p>
          </div>
        </div>
      </div>
    </section>
    <section css={rooms}>
      <div css={roomBlock}>
        <h2>On-site hotels</h2>
        <div className="divider" />
        <p>
          <a
            href="https://www.bedfordvillageinn.com/bvi-property-map"
            target="_blank"
          >
            Map of the property.
          </a>{' '}
          Rooms are available at:
        </p>
        <ul>
          <li>
            <a
              href="https://be.synxis.com/?adult=2&arrive=2023-07-08&chain=10237&child=0&config=MHTTG&currency=USD&depart=2023-07-09&dest=BEDFORDVILLA&group=10068B&hotel=75787&level=hotel&locale=en-US&rooms=1&theme=MHTTG"
              target="_blank"
            >
              The Inn
            </a>
            , in the same building where the reception will be
          </li>
          <li>
            <a
              href="https://be.synxis.com/?adult=2&arrive=2023-07-07&chain=10237&child=0&config=MHTTG&currency=USD&depart=2023-07-09&dest=BEDFORDVILLA&group=1006GX&hotel=75787&level=hotel&locale=en-US&rooms=1&theme=MHTTG"
              target="_blank"
            >
              The Grand
            </a>
            , about a two-minute walk away from the Inn
          </li>
        </ul>
        <p>
          Please book a room as soon as possible as availability may run out. If
          you would prefer to book over the phone, call{' '}
          <a href="tel:6034722001">(603) 472-2001</a> and use group code{' '}
          <strong>10068B</strong> for the Inn or <strong>1006GX</strong> for the
          Grand.
        </p>
      </div>
      <div css={roomDivider} />
      <div css={roomAlternatives}>
        <h2>Alternatives</h2>
        <div className="divider" />
        <p>
          Manchester, NH is a 10-minute drive away from the Bedford Village Inn
          and has plenty of lodging options.
        </p>
      </div>
    </section>
    <section css={faqs}>
      <div css={faqContent}>
        <div css={faqTitle}>
          <h2>FAQs</h2>
          <div className="divider" />
          <Ceremony />
        </div>
        <div css={faqText}>
          <div>Attire</div>
          <div>Semi-formal</div>
          <div>Kids</div>
          <div>
            We love your kids, but we'd like this to be a night off for you!
          </div>
          <div>Parking</div>
          <div>Free on-site</div>
          <div>Travel</div>
          <div>
            1-hour drive from Boston and 10-minute drive from Manchester-Boston
            Regional Airport (MHT)
          </div>
          <div>Weather</div>
          <div>
            In case of inclement weather, the ceremony, cocktail hour, and
            reception will take place in the Great Hall.
          </div>
        </div>
      </div>
    </section>
    <section css={green}>
      <div css={greenBorder}>
        <div css={greenContent}>
          <div>
            <h2>No registry</h2>
            <div
              className="divider"
              css={{
                borderBottom: '1px solid white',
                borderTop: '1px solid white',
              }}
            />
            <p>
              Please do not get us any gifts! Your presence at our wedding is
              the greatest gift of all. If you really want to, here are a few
              ideas:
            </p>
          </div>
          <div>
            <Ceremony />
          </div>
        </div>
      </div>
    </section>
  </main>
);
