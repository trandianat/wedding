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
            <p>{paragraph}</p>
          ))}
        </Background>
        <Background variant={Variant.SECONDARY}>
          <h2>The relationship</h2>
          <Divider />
          <p>
            Brendan and Diana made their relationship official on a foggy
            Thanksgiving night in 2016. They never talked about long-term plans
            together.
          </p>
          <p>
            Brendan knew Diana was the one when she trekked through mud with him
            to see his favorite band, Metallica, at Slane Castle in Ireland.
          </p>
          <p>
            In the middle of the pandemic, they decided to buy a place together
            and it dawned on them that this was probably serious.
          </p>
        </Background>
        <Background>
          <h2>The engagement</h2>
          <Divider />
          {data.engagement.map((paragraph: string) => (
            <p>{paragraph}</p>
          ))}
        </Background>
      </main>
    )
  );
};
