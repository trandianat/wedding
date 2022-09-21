import { Background } from 'components/background';
import { Card } from 'components/card';
import { Cards } from 'components/cards';
import { useData } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Party = (): JSX.Element => {
  const data = useData(Category.PARTY);
  return (
    data && (
      <main>
        <Background variant={Variant.PRIMARY}>
          <Cards>
            <Card
              role="MATRON OF HONOR"
              name={data.matronOfHonor}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur nec ligula pellentesque, condimentum nulla eget,
                  aliquam turpis. Nullam id turpis sit amet metus tincidunt
                  mattis. Ut nec mauris ac augue dictum mollis."
            />
            <Card
              role="BEST MAN"
              name={data.bestMan}
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
              name={data.officiant}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec ligula pellentesque, condimentum nulla eget,
                    aliquam turpis. Nullam id turpis sit amet metus tincidunt
                    mattis. Ut nec mauris ac augue dictum mollis."
            />
            <Card
              role="FLOWER GIRL"
              name={data.flowerGirl}
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
            name={data.bouncer}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec ligula pellentesque, condimentum nulla eget,
                    aliquam turpis. Nullam id turpis sit amet metus tincidunt
                    mattis. Ut nec mauris ac augue dictum mollis."
            variant={Variant.SIDE}
          />
        </Background>
      </main>
    )
  );
};
