import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Grid } from 'components/grid';
import { Link } from 'components/link';
import { Fragment } from 'react';
import { Variant } from 'utils/types';

export const Thanks = (): JSX.Element => {
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
      {/* <Background variant={Variant.PRIMARY}>
                <h2>To our guests</h2>
                <Divider variant={Variant.SECONDARY} />
                <p>Message</p>
            </Background> */}
      <Background variant={Variant.SECONDARY}>
        <h2>Our vendors</h2>
        <Divider />
        <Grid items={vendors} />
      </Background>
    </main>
  );
};
