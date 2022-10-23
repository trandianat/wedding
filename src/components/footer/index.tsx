import * as styles from 'components/footer/styles';
import { useData } from 'utils/hooks';
import { Category } from 'utils/types';

export const Footer = (): JSX.Element => {
  const data = useData(Category.FOOTER);
  return (
    data && (
      <footer css={styles.footer}>
        Engagement photos by{' '}
        <a href={data.photographerLink} target="_blank">
          {data.photographer}
        </a>
      </footer>
    )
  );
};
