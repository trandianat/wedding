import { Background } from 'components/background';
import { Card } from 'components/card';
import { Cards } from 'components/cards';
import * as styles from 'pages/before/party/styles';
import { Fragment, useState } from 'react';
import { useData, useImages } from 'utils/hooks';
import { Category, Variant } from 'utils/types';

export const Party = (): JSX.Element => {
  const data = useData(Category.PARTY);
  const [matronOfHonor, bestMan, officiant, flowerGirl] = useImages(
    Category.PARTY
  );
  const [bonus, setBonus] = useState(false);
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
          <div css={styles.bonus}>
            {bonus && (
              <Card
                image={flowerGirl}
                name={data.bouncer}
                role="BOUNCER"
                variant={Variant.SIDE}
              >
                {data.bouncerDescription}
              </Card>
            )}
            <button onClick={() => setBonus(!bonus)}>
              Bonus{' '}
              {bonus ? (
                <Fragment>&uarr;</Fragment>
              ) : (
                <Fragment>&darr;</Fragment>
              )}
            </button>
          </div>
        </Background>
      </main>
    )
  );
};
