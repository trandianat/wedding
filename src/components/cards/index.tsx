import * as styles from 'components/cards/styles';

export const Cards = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <div css={styles.container}>{children}</div>;
