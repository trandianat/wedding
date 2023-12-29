import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import { Link } from 'components/link';
import * as styles from 'pages/after/video/styles';
import { useData } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Video = (): JSX.Element => {
  const data = useData(Category.VIDEO);
  return (
    data && (
      <main css={styles.video}>
        <Background variant={Variant.SECONDARY}>
          <h2>Video</h2>
          <Divider />
          <div className="body">
            <p>
              Our videographer,{' '}
              <Link url={data.videographerLink}>{data.videographer}</Link>, did
              an amazing job putting together a video of our wedding that we'll
              be able to look back on and relive the day for years to come. Play
              it below or watch it on{' '}
              <Link url={data.youtubeLink}>YouTube</Link>.
            </p>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              height="450"
              src={data.videoLink}
              width="100%"
            ></iframe>
          </div>
        </Background>
        <Footer />
      </main>
    )
  );
};
