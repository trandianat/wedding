import React from 'react';
import {
  primary,
  primaryBorder,
  secondary,
  secondaryContent,
} from 'pages/before/party/styles';
import { css } from '@emotion/react';

const Cards = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div css={{ margin: '0 auto', padding: '48px 0', width: 800 }}>
    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      {children}
    </div>
  </div>
);

const Card = ({
  role,
  name,
  description,
}: {
  role: string;
  name: string;
  description: string;
}): JSX.Element => (
  <div css={{ border: '1px solid white', height: 'min-content', width: 350 }}>
    <div css={{ height: 250 }}>image</div>
    <div css={{ backgroundColor: 'white', padding: 24 }}>
      <p css={{ fontSize: '1.2rem' }}>{role}</p>
      <h3>{name}</h3>
      <div className="divider" />
      <p>{description}</p>
    </div>
  </div>
);

export const Party = (): JSX.Element => (
  <main>
    <section css={primary}>
      <div css={primaryBorder}>
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
      </div>
    </section>
    <section css={secondary}>
      <div css={secondaryContent}>
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
      </div>
    </section>
    <section css={{ margin: '0 auto', padding: '48px 0', width: 600 }}>
      <div css={{ display: 'flex', gap: 24 }}>
        <div css={css({ border: '1px solid black', width: 200 })}>image</div>
        <div>
          <p css={{ fontSize: '1.2rem' }}>BOUNCER</p>
          <h3>Margo Mullane</h3>
          <div className="divider" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nec ligula pellentesque, condimentum nulla eget, aliquam turpis.
            Nullam id turpis sit amet metus tincidunt mattis. Ut nec mauris ac
            augue dictum mollis.
          </p>
        </div>
      </div>
    </section>
  </main>
);
