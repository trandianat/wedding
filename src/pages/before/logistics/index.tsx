import Cake from 'assets/icons/cake';
import Ceremony from 'assets/icons/ceremony';
import Champagne from 'assets/icons/champagne';
import Gift from 'assets/icons/gift';
import List from 'assets/icons/list';
import { Background } from 'components/background';
import { Divider } from 'components/divider';
import * as styles from 'pages/before/logistics/styles';
import { useData } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Logistics = (): JSX.Element => {
  const data = useData(Category.LOGISTICS);
  console.log('logistics', data);
  return (
    data && (
      <main>
        <Background variant={Variant.SECONDARY}>
          <div css={styles.intro}>
            <div css={styles.introImg}>asdf</div>
            <div css={styles.introText}>
              <h2>The Beans are getting married!</h2>
              <Divider />
              <p>
                Whoa, marriage? YES! And we'd love for you to be there to
                celebrate with us!
              </p>
              <div css={styles.introDetails}>
                <h3>
                  {data.weekDay}, {data.month} {data.day}, {data.year}
                </h3>
                <p>{data.venue}</p>
                <p>{data.address}</p>
              </div>
            </div>
          </div>
        </Background>
        <Background variant={Variant.PRIMARY}>
          <div css={styles.events}>
            <div>
              <Ceremony />
              <h2>Ceremony</h2>
              <p>{data.ceremonyTime}</p>
              <p>{data.ceremonyLocation}</p>
            </div>
            <div>
              <Champagne />
              <h2>Cocktail Hour</h2>
              <p>{data.cocktailTime}</p>
              <p>{data.cocktailLocation}</p>
            </div>
            <div>
              <Cake />
              <h2>Reception</h2>
              <p>{data.receptionTime}</p>
              <p>{data.receptionLocation}</p>
            </div>
          </div>
          <p css={styles.eventsFooter}>
            In case of inclement weather, these events will all take place in
            the {data.receptionLocation}.
          </p>
        </Background>
        <Background>
          <div css={styles.hotel}>
            <div css={styles.hotelOnSite}>
              <h2>On-site hotels</h2>
              <Divider />
              <p>
                <a href={data.map} target="_blank">
                  Map of the property
                </a>
                . Rooms are available at:
              </p>
              <ul>
                <li>
                  <a href={data.primaryHotelLink} target="_blank">
                    The {data.primaryHotel}
                  </a>
                  , in the same building where the reception will be
                </li>
                <li>
                  <a href={data.secondaryHotelLink} target="_blank">
                    The {data.secondaryHotel}
                  </a>
                  , about a two-minute walk away from the {data.primaryHotel}
                </li>
              </ul>
              <p>
                Please book a room as soon as possible as availability may run
                out. If you would prefer to book over the phone, call{' '}
                <a href={`tel:${data.phone}`}>{data.formattedPhone}</a> and use
                group code <strong>{data.primaryHotelCode}</strong> for the{' '}
                {data.primaryHotel} or{' '}
                <strong>{data.secondaryHotelCode}</strong> for the{' '}
                {data.secondaryHotel}. Check-in is after {data.checkIn} and
                check-out by {data.checkOut}.
              </p>
            </div>
            <div css={styles.hotelDivider} />
            <div css={styles.hotelAlternatives}>
              <h2>Alternatives</h2>
              <Divider />
              <p>{data.alternatives}</p>
            </div>
          </div>
        </Background>
        <Background variant={Variant.SECONDARY}>
          <div css={styles.faqs}>
            <div css={styles.faqTitle}>
              <h2>FAQs</h2>
              <Divider />
              <List />
            </div>
            <div css={styles.faqText}>
              <div>Attire</div>
              <div>{data.attire}</div>
              <div>Bar</div>
              <div>{data.bar}</div>
              <div>Kids</div>
              <div>{data.kids}</div>
              <div>Parking</div>
              <div>{data.parking}</div>
              <div>Travel</div>
              <div>{data.travel}</div>
            </div>
          </div>
        </Background>
        <Background variant={Variant.PRIMARY}>
          <div css={styles.registry}>
            <div>
              <h2>No registry</h2>
              <Divider variant={Variant.SECONDARY} />
              <p>
                Please do not get us any gifts! Your presence at our wedding is
                the greatest gift of all. Here's what you can do to make us the
                happiest:
              </p>
              <ul>
                <li>Write us a card</li>
                <li>Eat, drink, and dance all night</li>
                <li>
                  Take lots of pictures at the photo booths, and leave one of
                  the printouts in our guestbook
                </li>
                <li>
                  Introduce yourself to someone new amongst our friends and
                  families
                </li>
                <li>Take some flowers home with you</li>
              </ul>
            </div>
            <div>
              <Gift />
            </div>
          </div>
        </Background>
      </main>
    )
  );
};
