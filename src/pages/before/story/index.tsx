import { Background } from 'components/background';
import { Divider } from 'components/divider';
import { Variant } from 'types';

export const Story = (): JSX.Element => (
  <main>
    <Background variant={Variant.PRIMARY}>
      <h2>The beginning</h2>
      <Divider variant={Variant.SECONDARY} />
      <p>
        Brendan and Diana met at work in Liberty Mutual's Boston office in 2016.
        Their teams sat next to each other, and one of Brendan's teammates was
        Diana's friend from college, Carlos. Diana often walked over to Carlos's
        desk to talk, and they went out for happy hours after work and invited
        others around them to join. The happy hour crew drank many Boom Sauces
        together, and gradually Brendan and Diana started hanging out alone.
      </p>
      <p></p>
    </Background>
    <Background variant={Variant.SECONDARY}>
      <h2>The relationship</h2>
      <Divider />
      <p></p>
    </Background>
    <Background>
      <h2>The engagement</h2>
      <Divider />
      <p>
        Brendan proposed in December 2021 at Grill 23, a steakhouse located on
        the ground floor of the Liberty Mutual office and in the same building
        where they first met. They have happily been living in a condo near
        Boston College where Diana went to school, and are so excited to get
        married near Brendan's alma mater, Saint Anselm College.
      </p>
    </Background>
  </main>
);
