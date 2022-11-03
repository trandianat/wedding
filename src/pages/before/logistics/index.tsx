import Cake from 'assets/icons/cake';
import Ceremony from 'assets/icons/ceremony';
import Champagne from 'assets/icons/champagne';
import Gift from 'assets/icons/gift';
import List from 'assets/icons/list';
import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { Grid } from 'components/grid';
import { Link } from 'components/link';
import * as styles from 'pages/before/logistics/styles';
import { Fragment } from 'react';
import { useData, useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Logistics = (): JSX.Element => {
  const data = useData(Category.LOGISTICS);
  const [engagement] = useImages(Category.LOGISTICS);
  return (
    data && (
      <main>
        <Background variant={Variant.SECONDARY}>
          <div css={styles.intro}>
            <img src={engagement} />
            <div css={styles.introText}>
              <h2>
                {data.weekDay}, {data.month} {data.day}, {data.year}
              </h2>
              <Divider />
              <p>
                {data.venue} (<Link url={data.map}>map</Link>)
              </p>
              <p>{data.address}</p>
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
              <div css={styles.eventsSubtext}>
                <p>Outdoor (on grass)</p>
                <p>
                  <em>Be seated by 4:45pm</em>
                </p>
                <p>
                  <em>No phones please</em>
                </p>
              </div>
            </div>
            <div>
              <Champagne />
              <h2>Cocktail Hour</h2>
              <p>{data.cocktailTime}</p>
              <p>{data.cocktailLocation}</p>
              <div css={styles.eventsSubtext}>
                <p>Outdoor (on grass)</p>
              </div>
            </div>
            <div>
              <Cake />
              <h2>Reception</h2>
              <p>{data.receptionTime}</p>
              <p>{data.receptionLocation}</p>
              <div css={styles.eventsSubtext}>
                <p>Indoor</p>
              </div>
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
              <p>Rooms are available at:</p>
              <ul>
                <li>
                  <Link url={data.primaryHotelLink}>
                    The {data.primaryHotel}
                  </Link>
                  , in the same building where the reception will be
                  <ul>
                    {data.primaryHotelDetails.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link url={data.secondaryHotelLink}>
                    The {data.secondaryHotel}
                  </Link>
                  , about a two-minute walk away from the {data.primaryHotel}
                  <ul>
                    {data.secondaryHotelDetails.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              </ul>
              <p>
                If you would prefer to book over the phone, call{' '}
                <Link url={`tel:${data.phone}`}>{data.formattedPhone}</Link> and
                mention group code <strong>{data.primaryHotelCode}</strong> for
                the {data.primaryHotel} or{' '}
                <strong>{data.secondaryHotelCode}</strong> for the{' '}
                {data.secondaryHotel}; you can also request complimentary
                shuttle service to and from {data.airport} with 24-hours notice.
                Check-in is after {data.checkIn} and check-out by{' '}
                {data.checkOut}.
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
            <Grid
              items={[
                { category: 'Attire', description: data.attire },
                { category: 'Bar', description: data.bar },
                { category: 'Kids', description: data.kids },
                {
                  category: 'Parking',
                  description: (
                    <Fragment>
                      {data.parking} (<Link url={data.map}>map</Link>)
                    </Fragment>
                  ),
                },
                { category: 'Travel', description: data.travel },
              ]}
            />
          </div>
        </Background>
        <Background variant={Variant.PRIMARY}>
          <div css={styles.registry}>
            <div>
              <h2>Registry</h2>
              <Divider variant={Variant.SECONDARY} />
              <p>
                We have a{' '}
                <Link
                  className="secondary"
                  url="https://www.zola.com/registry/tranmurphywedding/edit"
                >
                  honeymoon registry
                </Link>{' '}
                that you can contribute to, but no pressure at all! Here's what
                else you can do to make us the happiest:
              </p>
              <ul>
                <li>Write us a card</li>
                <li>Eat, drink, and dance all night</li>
                <li>
                  Take lots of pictures at the photo booth, and leave one of the
                  printouts in our guestbook
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
        <Footer />
      </main>
    )
  );
};
