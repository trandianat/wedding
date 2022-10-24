import { Background } from 'components/background';
import { Card } from 'components/card';
import { Cards } from 'components/cards';
import { useData, useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Party = (): JSX.Element => {
  const data = useData(Category.PARTY);
  const [matronOfHonor, bestMan, officiant, flowerGirl] = useImages(
    Category.PARTY
  );
  return (
    data && (
      <main>
        <Background variant={Variant.PRIMARY}>
          <Cards>
            <Card
              image={matronOfHonor}
              name={data.matronOfHonor}
              role="MATRON OF HONOR"
            >
              {data.matronOfHonorDescription}
            </Card>
            <Card
              image={bestMan}
              name={data.bestMan}
              position="top"
              role="BEST MAN"
            >
              {data.bestManDescription}
            </Card>
          </Cards>
        </Background>
        <Background variant={Variant.SECONDARY}>
          <Cards>
            <Card image={officiant} name={data.officiant} role="OFFICIANT">
              {data.officiantDescription}
            </Card>
            <Card image={flowerGirl} name={data.flowerGirl} role="FLOWER GIRL">
              {data.flowerGirlDescription}
            </Card>
          </Cards>
        </Background>
        <Background>
          <Card
            image={officiant}
            name={data.bouncer}
            role="BOUNCER"
            variant={Variant.SIDE}
          >
            Margo has a lengthy history of dealing with intoxicated persons,
            aggressive behavior, and noncompliance. THough not at liberty to
            dsicuss which members of the group, let's just say she knows when
            certain members of the party should call it a night.
          </Card>
        </Background>
      </main>
    )
  );
};
