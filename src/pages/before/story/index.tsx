import { Background } from 'components/background';
import { Divider } from 'components/divider';
import * as styles from 'pages/before/story/styles';
import { useData, useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Story = (): JSX.Element => {
  const data = useData(Category.STORY);
  const [halloween, engagement] = useImages(Category.STORY);
  return (
    data && (
      <main css={styles.story}>
        <Background variant={Variant.PRIMARY}>
          <h2>The beginning</h2>
          <Divider />
          <div css={styles.beginning}>
            <div>
              {data.beginning.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div css={styles.polaroid}>
              <img src={halloween} />
              <p>{data.caption}</p>
            </div>
          </div>
        </Background>
        <Background variant={Variant.SECONDARY}>
          <h2>The relationship</h2>
          <Divider />
          {data.relationship.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Background>
        <Background>
          <h2>The engagement</h2>
          <Divider />
          <div css={styles.engagement}>
            <img src={engagement} />
            <div>
              {data.engagement.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Background>
      </main>
    )
  );
};
