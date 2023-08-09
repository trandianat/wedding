import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { Link } from 'components/link';
import * as styles from 'pages/after/photos/styles';
import { useData, useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Photos = (): JSX.Element => {
  const data = useData(Category.PHOTOS);
  const [look] = useImages(Category.PHOTOS);
  return (
    data && (
      <main css={styles.photos}>
        <Background variant={Variant.SECONDARY}>
          <h2>Photos</h2>
          <Divider />
          <p>
            Stay tuned for photos of the wedding. If you have any photos that
            you would like to share, please email or text them to us or upload
            them to our <Link url={data.guestAlbumLink}>Google album</Link>.
          </p>
          <img src={look} />
        </Background>
        <Footer />
      </main>
    )
  );
};
