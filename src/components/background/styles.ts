import { secondary as secondaryDivider } from 'components/divider/styles';

export const primary = {
  backgroundColor: 'var(--green)',
  color: 'var(--white)',
  padding: '12px 0',
  a: { color: 'var(--white)' },
  '.divider': secondaryDivider,
};

export const secondary = {
  backgroundColor: 'var(--beige)',
  padding: '48px 0',
  '@media (max-width: 450px)': { padding: '32px 0' },
};

export const tertiary = {
  padding: '48px 0',
  '@media (max-width: 450px)': { padding: '32px 0' },
};

export const border = {
  borderBottom: '1px solid var(--white)',
  borderTop: '1px solid var(--white)',
  padding: '48px 0',
  '@media (max-width: 450px)': { padding: '32px 0' },
};

export const width = {
  margin: '0 auto',
  width: 800,
  '@media (max-width: 950px)': { width: 650 },
  '@media (max-width: 700px)': { width: 400 },
  '@media (max-width: 450px)': { width: '80%' },
};
