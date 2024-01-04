import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { Link } from 'components/link';
import * as styles from 'pages/after/photos/styles';
import { useData, useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Photos = (): JSX.Element => {
  const data = useData(Category.PHOTOS);
  const [official, guest, photoBooth] = useImages(Category.PHOTOS);
  return (
    data && (
      <main>
        <Background variant={Variant.SECONDARY}>
          <h2>Photos</h2>
          <Divider />
          <div css={styles.photos}>
            <Link url={data.officialAlbumLink}>
              <img src={official} />
              <h3>Official photos</h3>
              <p>
                Taken by <span>{data.photographer}</span>
              </p>
            </Link>
            <Link url={data.guestAlbumLink}>
              <img src={guest} />
              <h3>Guest photos</h3>
              <p>Feel free to upload photos from our wedding</p>
            </Link>
            <Link url={data.photoBoothLink}>
              <img src={photoBooth} />
              <h3>Photo booth</h3>
              <p>The password was mailed with your thank-you card</p>
            </Link>
          </div>
        </Background>
        <Footer />
      </main>
    )
  );
};
