import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { useData } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Story = (): JSX.Element => {
  const data = useData(Category.STORY);
  return (
    data && (
      <main>
        <Background variant={Variant.PRIMARY}>
          <h2>The beginning</h2>
          <Divider variant={Variant.SECONDARY} />
          <p>{data.beginning}</p>
        </Background>
        <Background variant={Variant.SECONDARY}>
          <h2>The relationship</h2>
          <Divider />
          <p></p>
        </Background>
        <Background>
          <h2>The engagement</h2>
          <Divider />
          <p>{data.engagement}</p>
        </Background>
      </main>
    )
  );
};
