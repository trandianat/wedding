import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { Link } from 'components/link';
import * as styles from 'pages/after/photos/styles';
import { useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Photos = (): JSX.Element => {
  const [look] = useImages(Category.PHOTOS);
  return (
    <main css={styles.photos}>
      <Background variant={Variant.PRIMARY}>
        <h2>Photos</h2>
        <Divider />
        <p>
          Stay tuned for photos of the wedding. If you have any photos that you
          would like to share, please email or text them to us or upload them to
          our{' '}
          <Link url="https://photos.app.goo.gl/U4whuybqKMs1Ut1J9">
            Google album
          </Link>
          .
        </p>
        <img src={look} />
      </Background>
      <Footer />
    </main>
  );
};
