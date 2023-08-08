import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Link } from 'components/link';
import * as styles from 'pages/before/activities/styles';
import { useData } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Activities = (): JSX.Element => {
  const data = useData(Category.ACTIVITIES);
  return (
    data && (
      <main css={styles.activities}>
        <Background variant={Variant.PRIMARY}>
          <h2>{data.venue}</h2>
          <Link url={data.venueAddressLink}>{data.venueAddress}</Link>
          <p>
            <i>Where our wedding will take place</i>
          </p>
          <Divider />
          <ul>
            <li>
              Pool, hot tub, and gym available for guests staying at either the
              Grand or the Inn
            </li>
            <li>
              Several <Link url={data.venueDiningLink}>dining options</Link> for
              breakfast, lunch, and dinner
            </li>
            <li>
              Facials, massages, nail services, etc. at{' '}
              <Link url={data.venueSalonLink}>{data.venueSalon}</Link>
            </li>
            <li>
              Shop for clothes and accessories at{' '}
              <Link url={data.venueBoutiqueLink}>{data.venueBoutique}</Link>
            </li>
          </ul>
        </Background>
        <Background variant={Variant.SECONDARY}>
          <h2>{data.winery}</h2>
          <div css={styles.winery}>
            <div>
              <Link url={data.winery1AddressLink}>{data.winery1Address}</Link>
              <p>
                <i>10-minute drive from {data.venue}</i>
              </p>
            </div>
            <div>
              <Link url={data.winery2AddressLink}>{data.winery2Address}</Link>
              <p>
                <i>30-minute drive from {data.venue}</i>
              </p>
            </div>
          </div>
          <Divider />
          <ul>
            <li>Order wine from the bar and enjoy it anywhere on-site</li>
            <li>
              Purchase <Link url={data.wineryShopLink}>wine and gifts</Link> to
              take home
              <ul>
                <li>We recommend the Malbec and Sangria Blanca</li>
              </ul>
            </li>
            <li>
              Public and private wine tastings and tours in{' '}
              <Link url={data.winery1ToursLink}>{data.winery1Location}</Link>{' '}
              and{' '}
              <Link url={data.winery2ToursLink}>{data.winery2Location}</Link>
            </li>
            <li>
              Restaurants with outdoor patios in{' '}
              <Link url={data.winery1RestaurantLink}>
                {data.winery1Location}
              </Link>{' '}
              and{' '}
              <Link url={data.winery2RestaurantLink}>
                {data.winery2Location}
              </Link>
            </li>
            <li>
              Grab-and-go and picnic packages at{' '}
              <Link url={data.winery2MarketLink}>{data.winery2Market}</Link> in{' '}
              {data.winery2Location}
            </li>
            <li>
              Golf and mini-golf at{' '}
              <Link url={data.winery2GolfLink}>{data.winery2Golf}</Link> in{' '}
              {data.winery2Location}
            </li>
            <li>
              <Link url={data.wineryEventsLink}>Events</Link> like cooking and
              fitness classes, live music, etc.
            </li>
          </ul>
        </Background>
        <Background>
          <h2>{data.college}</h2>
          <Link url={data.collegeAddressLink}>{data.collegeAddress}</Link>
          <p>
            <i>10-minute drive from {data.venue}</i>
          </p>
          <Divider />
          <p>{data.collegeDescription}</p>
          <ul>
            <li>
              Get tickets to a show at the{' '}
              <Link url={data.collegeTicketsLink}>{data.collegeTickets}</Link>
            </li>
            <li>
              Check out the{' '}
              <Link url={data.collegeArtsLink}>
                visual, performing, and fine arts
              </Link>{' '}
              departments
            </li>
            <li>
              Attend Mass (<Link url={data.collegeMassLink}>schedule</Link>)
            </li>
          </ul>
        </Background>
        <Background variant={Variant.PRIMARY}>
          <h2>{data.shop}</h2>
          <Link url={data.shopAddressLink}>{data.shopAddress}</Link>
          <p>
            <i>15-minute drive from {data.venue}</i>
          </p>
          <Divider />
          <p>
            Even if you're not into outdoor activities, visiting{' '}
            <Link url={data.shopLink}>{data.shop}</Link> is quite an experience.
            Not only are there tons of equipment and gear you can get for
            various outdoor activities, but there's also incredible decorations
            and fun, random snacks.
          </p>
        </Background>
        <Background variant={Variant.SECONDARY}>
          <h2>{data.park}</h2>
          <Link url={data.parkAddressLink}>{data.parkAddress}</Link>
          <p>
            <i>30-minute drive from {data.venue}</i>
          </p>
          <Divider />
          <p>
            We went on lots of field trips here growing up, and it's still fun
            as an adult. We love going on the Untamed rollercoaster over and
            over. It is encouraged to{' '}
            <Link url={data.parkTicketsLink}>purchase tickets</Link> online
            ahead of time to expedite entry.
          </p>
        </Background>
      </main>
    )
  );
};
