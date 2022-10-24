import * as styles from 'components/footer/styles';
import { Link } from 'components/link';
import { useData } from 'utils/hooks';
import { Category } from 'utils/types';

export const Footer = (): JSX.Element => {
  const data = useData(Category.FOOTER);
  return (
    data && (
      <footer css={styles.footer}>
        Engagement photos by{' '}
        <Link url={data.photographerLink}>{data.photographer}</Link>
      </footer>
    )
  );
};
