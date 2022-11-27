import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import * as styles from 'pages/after/thanks/styles';
import after from 'utils/after';
import { useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Thanks = (): JSX.Element => {
  const [approach, grab] = useImages(Category.THANKS);
  return (
    <main css={styles.thanks}>
      <Background variant={Variant.SECONDARY}>
        <h2>Thank you</h2>
        <Divider />
        <p>
          {after
            ? 'Thank you for being a part of our wedding! We are so grateful that you took the time to come to Bedford Village Inn to celebrate with us. We are taking some time to decompress now that the wedding has happened, but eventually we will be updating this page with our thoughts and photos of the experience.'
            : 'Thank you for visiting and being a part of our big day. We have been having a lot of fun planning our wedding and are so looking forward to celebrating with you! After the wedding, we will update this page with our thoughts and photos of the experience.'}
        </p>
        <div css={styles.images}>
          <img src={approach} />
          <img src={grab} />
        </div>
      </Background>
      <Footer />
    </main>
  );
};
