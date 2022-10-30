import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Link } from 'components/link';
import * as styles from 'pages/before/activities/styles';
import { Variant } from 'utils/types';

export const Activities = (): JSX.Element => (
  <main css={styles.activities}>
    <Background variant={Variant.PRIMARY}>
      <h2>Bedford Village Inn</h2>
      <Link className="secondary" url="https://goo.gl/maps/TfpqEhDx2zUJB54Y7">
        2 Olde Bedford Way, Bedford, NH 03110
      </Link>
      <p>
        <i>Where our wedding will take place</i>
      </p>
      <Divider variant={Variant.SECONDARY} />
      <ul>
        <li>Pool, hot tub, and gym available to those staying at the hotel</li>
        <li>
          Several{' '}
          <Link
            className="secondary"
            url="https://www.bedfordvillageinn.com/dining"
          >
            dining options
          </Link>{' '}
          for breakfast, lunch, and dinner
        </li>
        <li>
          Facials, massages, nail services, etc. at{' '}
          <Link className="secondary" url="http://www.luxebvi.com">
            Luxe Salon & Spa
          </Link>
        </li>
        <li>
          Shop for clothes and accessories at{' '}
          <Link className="secondary" url="https://arnaldojoseph.com/boutique">
            Arnaldo Joseph Boutique
          </Link>
        </li>
      </ul>
    </Background>
    <Background variant={Variant.SECONDARY}>
      <h2>LaBelle Winery</h2>
      <div css={styles.winery}>
        <div>
          <Link url="https://goo.gl/maps/yg1dYVvCWjByA1Mr7">
            345 State Rte 101, Amherst, NH 03031
          </Link>
          <p>
            <i>10-minute drive from Bedford Village Inn</i>
          </p>
        </div>
        <div>
          <Link url="https://goo.gl/maps/5R4ohJEdw5GeUvXJ6">
            14 NH-111, Derry, NH 03038
          </Link>
          <p>
            <i>30-minute drive from Bedford Village Inn</i>
          </p>
        </div>
      </div>
      <Divider />
      <ul>
        <li>Order wine from the bar and enjoy it anywhere on-site</li>
        <li>
          Purchase{' '}
          <Link url="https://labellewinery.com/shop">wine and gifts</Link> to
          take home
          <ul>
            <li>We recommend the Malbec and Sangria Blanca</li>
          </ul>
        </li>
        <li>
          Public and private wine tastings and tours in{' '}
          <Link url="https://labellewinery.com/amherst-tastings-tours">
            Amherst
          </Link>{' '}
          and{' '}
          <Link url="https://labellewinery.com/derry-tastings-tours">
            Derry
          </Link>
        </li>
        <li>
          Restaurants with outdoor patios in{' '}
          <Link url="https://labellewinery.com/labelle-winery-amherst/the-bistro">
            Amherst
          </Link>{' '}
          and{' '}
          <Link url="https://labellewinery.com/labelle-winery-derry/americus-restaurant">
            Derry
          </Link>
        </li>
        <li>
          Grab-and-go and picnic packages at{' '}
          <Link url="https://labellewinery.com/labelle-winery-derry/market">
            LaBelle Market
          </Link>{' '}
          in Derry
        </li>
        <li>
          Golf and mini-golf at{' '}
          <Link url="https://labellewinery.com/labelle-winery-derry/market">
            The Links and Mini Links
          </Link>{' '}
          in Derry
        </li>
        <li>
          <Link url="https://labellewinery.com/public-winery-events">
            Events
          </Link>{' '}
          like cooking and fitness classes, live music, etc.
        </li>
      </ul>
    </Background>
    <Background>
      <h2>Saint Anselm College</h2>
      <Link url="https://goo.gl/maps/mMdWiEx8PkCeoHTB9">
        100 St Anselm Dr, Manchester, NH 03102
      </Link>
      <p>
        <i>10-minute drive from Bedford Village Inn</i>
      </p>
      <Divider />
      <p>
        Saint Anselm College or "The Hilltop" is where Brendan went to college,
        where he says he majored in "Budlight and skiing." Besides touring the
        beautiful campus, you can:
      </p>
      <ul>
        <li>
          Get tickets to a show at the{' '}
          <Link url="https://tickets.anselm.edu">
            Dana Center for the Humanities
          </Link>
        </li>
        <li>
          Check out the{' '}
          <Link url="https://www.anselm.edu/the-arts">
            visual, performing, and fine arts
          </Link>{' '}
          departments
        </li>
        <li>
          Attend Mass (
          <Link url="https://www.saintanselmabbey.org/mass-schedule">
            schedule
          </Link>
          )
        </li>
      </ul>
    </Background>
    <Background variant={Variant.PRIMARY}>
      <h2>Bass Pro Shops</h2>
      <Link className="secondary" url="https://goo.gl/maps/BWJAZhWCZN5RqotJ8">
        2 Commerce Dr, Hooksett, NH 03106
      </Link>
      <p>
        <i>15-minute drive from Bedford Village Inn</i>
      </p>
      <Divider variant={Variant.SECONDARY} />
      <p>
        Even if you're not into outdoor activities, visiting{' '}
        <Link className="secondary" url="https://www.basspro.com/shop/en">
          Bass Pro Shops
        </Link>{' '}
        is quite an experience. Not only are there tons of equipment and gear
        you can get for various outdoor activities, but there's also incredible
        decorations and fun, random snacks.
      </p>
    </Background>
    <Background variant={Variant.SECONDARY}>
      <h2>Canobie Lake Park</h2>
      <Link url="https://goo.gl/maps/j3YyFCmZJpChssPJ8">
        85 N Policy St, Salem, NH 03079
      </Link>
      <p>
        <i>30-minute drive from Bedford Village Inn</i>
      </p>
      <Divider />
      <p>
        We went on lots of field trips here growing up, and it's still fun as an
        adult. We love going on the Untamed rollercoaster over and over. It is
        encouraged to{' '}
        <Link url="https://www.canobie.com/buy-tickets">purchase tickets</Link>{' '}
        online ahead of time to expedite entry.
      </p>
    </Background>
  </main>
);
