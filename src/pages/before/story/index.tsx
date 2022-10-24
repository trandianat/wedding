import { Background } from 'components/background';
import { Divider } from 'components/divider';
import * as styles from 'pages/before/story/styles';
import { useData } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Story = (): JSX.Element => {
  const data = useData(Category.STORY);
  return (
    data && (
      <main css={styles.story}>
        <Background variant={Variant.PRIMARY}>
          <h2>The beginning</h2>
          <Divider variant={Variant.SECONDARY} />
          {data.beginning.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
          {data.engagement.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Background>
      </main>
    )
  );
};
