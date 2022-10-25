import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Variant } from 'utils/types';

export const Photos = (): JSX.Element => (
  <main>
    <Background variant={Variant.PRIMARY}>
      <h2>Photos</h2>
      <Divider variant={Variant.SECONDARY} />
      <p>Stay tuned for photos of the wedding!</p>
    </Background>
  </main>
);
