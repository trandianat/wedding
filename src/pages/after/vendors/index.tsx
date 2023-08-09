import { Fragment } from 'react';
import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { Grid } from 'components/grid';
import { Link } from 'components/link';
import * as styles from 'pages/after/vendors/styles';
import after from 'utils/after';
import { useData, useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Vendors = (): JSX.Element => {
  const data = useData(Category.VENDORS) ?? {};
  const [engagement] = useImages(Category.VENDORS);
  const vendors = [
    {
      category: 'Venue',
      description: <Link url={data.venueLink}>{data.venue}</Link>,
    },
    {
      category: 'Photography',
      description: <Link url={data.photographyLink}>{data.photography}</Link>,
    },
    {
      category: 'Room block',
      description: <Link url={data.roomBlockLink}>{data.roomBlock}</Link>,
    },
  ];
  if (after)
    vendors.push(
      ...[
        {
          category: 'Bus',
          description: (
            <Fragment>
              <Link url={data.busLink}>{data.bus}</Link>/
              <Link url={data.alternateBusLink}>{data.alternateBus}</Link>
            </Fragment>
          ),
        },
        {
          category: 'DJ',
          description: (
            <Fragment>
              <Link url={data.djLink}>{data.dj}</Link> of{' '}
              <Link url={data.djCompanyLink}>{data.djCompany}</Link>
            </Fragment>
          ),
        },
        {
          category: 'Flowers',
          description: <Link url={data.flowersLink}>{data.flowers}</Link>,
        },
        {
          category: 'Hair and makeup',
          description: <Link url={data.salonLink}>{data.salon}</Link>,
        },
        {
          category: 'Photo booth',
          description: <Link url={data.photoBoothLink}>{data.photoBooth}</Link>,
        },
        {
          category: 'Videographer',
          description: (
            <Link url={data.videographyLink}>{data.videography}</Link>
          ),
        },
        {
          category: 'Wedding dress',
          description: (
            <Fragment>
              <Link url={data.dressBrandLink}>{data.dressBrand}</Link> at{' '}
              <Link url={data.dressShopLink}>{data.dressShop}</Link>
            </Fragment>
          ),
        },
      ]
    );
  return (
    data && (
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
    )
  );
};
