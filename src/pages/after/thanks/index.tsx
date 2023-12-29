import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import * as styles from 'pages/after/thanks/styles';
import { useData, useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Thanks = (): JSX.Element => {
  const data = useData(Category.THANKS);
  const [ceremony, cocktailHour] = useImages(Category.THANKS);
  return (
    data && (
      <main>
        <Background variant={Variant.SECONDARY}>
          <h2>Thank you</h2>
          <Divider />
          <div css={styles.thanks}>
            <p>{data.message}</p>
            <div css={styles.images}>
              <img src={ceremony} />
              <img src={cocktailHour} />
            </div>
          </div>
        </Background>
        <Footer />
      </main>
    )
  );
};
