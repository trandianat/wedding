import * as styles from 'components/footer/styles';

export const Footer = (): JSX.Element => {
  return (
    <footer css={styles.footer}>
      Engagement photos by{' '}
      <a href="https://klenoxphoto.com">K. Lenox Photography</a>
    </footer>
  );
};
