import { css } from '@emotion/react';

export const thanks = { p: { marginBottom: 24 } };

export const images = css({
  display: 'flex',
  gap: 16,
  img: { width: '50%' },
  '@media (max-width: 700px)': {
    flexDirection: 'column',
    img: { width: '100%' },
  },
});
