import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Footer } from 'components/footer';
import * as styles from 'pages/after/thanks/styles';
import after from 'utils/after';
import { useData, useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Thanks = (): JSX.Element => {
  const data = useData(Category.THANKS);
  const [approach, grab] = useImages(Category.THANKS);
  return (
    data && (
      <main css={styles.thanks}>
        <Background variant={Variant.SECONDARY}>
          <h2>Thank you</h2>
          <Divider />
          <p>{after ? data.postWedding : data.preWedding}</p>
          <div css={styles.images}>
            <img src={approach} />
            <img src={grab} />
          </div>
        </Background>
        <Footer />
      </main>
    )
  );
};
