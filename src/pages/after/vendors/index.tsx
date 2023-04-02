import { Fragment } from 'react';
import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { Grid } from 'components/grid';
import { Link } from 'components/link';
import * as styles from 'pages/after/vendors/styles';
import after from 'utils/after';
import { useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Vendors = (): JSX.Element => {
  const [engagement] = useImages(Category.VENDORS);
  const vendors = [
    {
      category: 'Venue',
      description: (
        <Link url="https://www.bedfordvillageinn.com">Bedford Village Inn</Link>
      ),
    },
    {
      category: 'Photography',
      description: (
        <Link url="https://klenoxphoto.com">K. Lenox Photography</Link>
      ),
    },
    {
      category: 'Room block',
      description: (
        <Link url="https://www.hilton.com/en/hotels/mhtbfhx-hampton-suites-manchester-bedford">
          Hampton Inn & Suites Manchester-Bedford
        </Link>
      ),
    },
  ];
  if (after)
    vendors.push(
      ...[
        {
          category: 'Bus',
          description: (
            <Link url="http://blacktielimo.com">Black Tie Limousine</Link>
          ),
        },
        {
          category: 'DJ',
          description: (
            <Fragment>
              <Link url="http://joebermudez.com">Joe Bermudez</Link> of{' '}
              <Link url="https://617weddings.com">617 Weddings</Link>
            </Fragment>
          ),
        },
        {
          category: 'Flowers',
          description: (
            <Link url="https://apothecaflowershoppe.com">Apotheca Flowers</Link>
          ),
        },
        {
          category: 'Hair and makeup',
          description: (
            <Link url="http://www.luxebvi.com">Luxe Salon & Spa</Link>
          ),
        },
        {
          category: 'Photo booth',
          description: (
            <Link url="https://photoboothplanet.com">Photo Booth Planet</Link>
          ),
        },
        {
          category: 'Tailor',
          description: (
            <Link url="https://www.yelenacouture.com">
              Yelena Couture Tailor
            </Link>
          ),
        },
        {
          category: 'Videographer',
          description: (
            <Link url="https://www.hindsightweddingfilms.net">
              Hindsight Wedding Films
            </Link>
          ),
        },
        {
          category: 'Wedding dress',
          description: (
            <Fragment>
              <Link url="https://nettabenshabu.com">Netta BenShabu</Link> at{' '}
              <Link url="https://flairbridesmaid.com">Flair Boston</Link>
            </Fragment>
          ),
        },
      ]
    );
  return (
    <main css={styles.vendors}>
      <Background variant={Variant.SECONDARY}>
        <h2>Our vendors</h2>
        <Divider />
        {after ? (
          <p>
            We wouldn't have been able to pull off our wedding without our
            amazing team of vendors:
          </p>
        ) : (
          <p>
            After our wedding, the rest of our team of vendors will be listed
            below. We are so thankful for all of the work that they have been
            putting into planning and executing our wedding!
          </p>
        )}
        <Grid items={vendors} spacing={1} />
        <img src={engagement} />
      </Background>
      <Footer />
    </main>
  );
};
