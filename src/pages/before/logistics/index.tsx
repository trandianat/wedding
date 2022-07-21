import {
  events,
  eventsFooter,
  faqs,
  faqText,
  faqTitle,
  hotel,
  hotelDivider,
  hotelAlternatives,
  hotelOnSite,
  intro,
  introDetails,
  introImg,
  introText,
  registry,
} from 'pages/before/logistics/styles';
import Cake from 'assets/icons/cake';
import Ceremony from 'assets/icons/ceremony';
import Champagne from 'assets/icons/champagne';
import Gift from 'assets/icons/gift';
import List from 'assets/icons/list';
import { Background, Variant } from 'components/background';

export const Logistics = (): JSX.Element => (
  <main>
    <Background variant={Variant.SECONDARY}>
      <div css={intro}>
        <div css={introImg}>asdf</div>
        <div css={introText}>
          <h2>The Beans are getting married!</h2>
          <div className="divider" />
          <p>
            Whoa, marriage? YES! And we'd love for you to be there to celebrate
            with us!
          </p>
          <div css={introDetails}>
            <h3>
              Saturday, July 8<sup>th</sup>, 2023
            </h3>
            <p>Bedford Village Inn</p>
            <p>2 Olde Bedford Way, Bedford, NH 03110</p>
          </div>
        </div>
      </div>
    </Background>
    <Background variant={Variant.PRIMARY}>
      <div css={events}>
        <div>
          <Ceremony />
          <h2>Ceremony</h2>
          <p>5pm - 5:30pm</p>
          <p>Courtyard Gardens</p>
        </div>
        <div>
          <Champagne />
          <h2>Cocktail Hour</h2>
          <p>5:30pm - 6:30pm</p>
          <p>Barn Gardens</p>
        </div>
        <div>
          <Cake />
          <h2>Reception</h2>
          <p>6:30pm - 11pm</p>
          <p>Great Hall</p>
        </div>
      </div>
      <p css={eventsFooter}>
        In case of inclement weather, these events will all take place in the
        Great Hall.
      </p>
    </Background>
    <Background>
      <div css={hotel}>
        <div css={hotelOnSite}>
          <h2>On-site hotels</h2>
          <div className="divider" />
          <p>
            Rooms are available at (
            <a
              href="https://www.bedfordvillageinn.com/bvi-property-map"
              target="_blank"
            >
              map of the property
            </a>
            ):
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
            Please book a room as soon as possible as availability may run out.
            If you would prefer to book over the phone, call{' '}
            <a href="tel:6034722001">(603) 472-2001</a> and use group code{' '}
            <strong>10068B</strong> for the Inn or <strong>1006GX</strong> for
            the Grand.
          </p>
        </div>
        <div css={hotelDivider} />
        <div css={hotelAlternatives}>
          <h2>Alternatives</h2>
          <div className="divider" />
          <p>
            Manchester, NH is a 10-minute drive away from the Bedford Village
            Inn and has plenty of lodging options.
          </p>
        </div>
      </div>
    </Background>
    <Background variant={Variant.SECONDARY}>
      <div css={faqs}>
        <div css={faqTitle}>
          <h2>FAQs</h2>
          <div className="divider" />
          <List />
        </div>
        <div css={faqText}>
          <div>Attire</div>
          <div>Semi-formal</div>
          <div>Bar</div>
          <div>Open all night. Please bring cash to tip the bartenders!</div>
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
        </div>
      </div>
    </Background>
    <Background variant={Variant.PRIMARY}>
      <div css={registry}>
        <div>
          <h2>No registry</h2>
          <div
            className="divider"
            css={{
              borderBottom: '1px solid var(--white)',
              borderTop: '1px solid var(--white)',
            }}
          />
          <p>
            Please do not get us any gifts! Your presence at our wedding is the
            greatest gift of all. Here's what you can do to make us the
            happiest:
          </p>
          <ul>
            <li>Write us a card</li>
            <li>Eat, drink, and dance all night</li>
            <li>Take some flowers home with you</li>
            <li>
              Introduce yourself to someone new amongst our friends and families
            </li>
          </ul>
        </div>
        <div>
          <Gift />
        </div>
      </div>
    </Background>
  </main>
);
