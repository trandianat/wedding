import { Background } from 'components/background';
import { Card } from 'components/card';
import { Cards } from 'components/cards';
import { Variant } from 'utils/types';

export const Party = (): JSX.Element => (
  <main>
    <Background variant={Variant.PRIMARY}>
      <Cards>
        <Card
          role="MATRON OF HONOR"
          name="Cindy Camponovo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur nec ligula pellentesque, condimentum nulla eget,
                  aliquam turpis. Nullam id turpis sit amet metus tincidunt
                  mattis. Ut nec mauris ac augue dictum mollis."
        />
        <Card
          role="BEST MAN"
          name="Anthony Knasas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur nec ligula pellentesque, condimentum nulla eget,
                  aliquam turpis. Nullam id turpis sit amet metus tincidunt
                  mattis. Ut nec mauris ac augue dictum mollis."
        />
      </Cards>
    </Background>
    <Background variant={Variant.SECONDARY}>
      <Cards>
        <Card
          role="OFFICIANT"
          name="Jeremiah Mullane"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec ligula pellentesque, condimentum nulla eget,
                    aliquam turpis. Nullam id turpis sit amet metus tincidunt
                    mattis. Ut nec mauris ac augue dictum mollis."
        />
        <Card
          role="FLOWER GIRL"
          name="Penelope Camponovo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec ligula pellentesque, condimentum nulla eget,
                    aliquam turpis. Nullam id turpis sit amet metus tincidunt
                    mattis. Ut nec mauris ac augue dictum mollis."
        />
      </Cards>
    </Background>
    <Background>
      <Card
        role="BOUNCER"
        name="Margo Mullane"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec ligula pellentesque, condimentum nulla eget,
                    aliquam turpis. Nullam id turpis sit amet metus tincidunt
                    mattis. Ut nec mauris ac augue dictum mollis."
        variant={Variant.SIDE}
      />
    </Background>
  </main>
);
