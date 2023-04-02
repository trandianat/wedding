import { css } from '@emotion/react';
import { primary } from 'components/divider/styles';

export const card = {
  display: 'flex',
  '.divider': primary,
  '@media (max-width: 950px)': { margin: '0 auto' },
};

export const image = (position: string) =>
  css({ objectFit: 'cover', objectPosition: position });

export const description = {
  backgroundColor: 'var(--white)',
  height: '100%',
  padding: 24,
};

export const role = { fontSize: '1.2rem' };
