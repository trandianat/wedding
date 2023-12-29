import { useLocation } from 'react-router-dom';
import * as styles from 'components/footer/styles';
import { Link } from 'components/link';
import { useData } from 'utils/hooks';
import { Category } from 'utils/types';

export const Footer = (): JSX.Element => {
  const data = useData(Category.FOOTER);
  const { pathname } = useLocation();
  return (
    data && (
      <footer css={styles.footer}>
        {pathname.includes('video') ? (
          <p>
            Wedding video by{' '}
            <Link url={data.videographerLink}>{data.videographer}</Link>
          </p>
        ) : (
          <p>
            Engagement photos by{' '}
            <Link url={data.photographerLink}>{data.photographer}</Link>
          </p>
        )}
      </footer>
    )
  );
};
