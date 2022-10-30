import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { Grid } from 'components/grid';
import { Link } from 'components/link';
import { Fragment } from 'react';
import after from 'utils/after';
import { useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Thanks = (): JSX.Element => {
  const [engagement] = useImages(Category.AFTER);
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
      category: 'DJ',
      description: (
        <Fragment>
          Joe Bermudez of{' '}
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
      description: <Link url="http://www.luxebvi.com">Luxe Salon & Spa</Link>,
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
  ];
  return (
    <main>
      <Background variant={Variant.PRIMARY}>
        <h2>{after ? 'To our guests' : 'To be updated'}</h2>
        <Divider variant={Variant.SECONDARY} />
        <p css={{ marginBottom: 16 }}>
          {after
            ? 'Thank you for being a part of our wedding! We are so grateful that you took the time to come to Bedford Village Inn to celebrate with us.'
            : 'Thank you for visiting and being a part of our big day. Check back here after the wedding for our thoughts and photos of the experience.'}
        </p>
        <img css={{ width: '100%' }} src={engagement} />
      </Background>
      {after && (
        <Background variant={Variant.SECONDARY}>
          <h2>Our vendors</h2>
          <Divider />
          <p css={{ marginBottom: 16 }}>
            We also wouldn't have made it through the wedding day without our
            amazing team of vendors:
          </p>
          <Grid items={vendors} spacing={1} />
        </Background>
      )}
      <Footer />
    </main>
  );
};
