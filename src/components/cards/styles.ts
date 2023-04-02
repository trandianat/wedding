import { css } from '@emotion/react';

export const container = css({
  display: 'flex',
  gap: 48,
  justifyContent: 'space-between',
  '&.stack': {
    flexWrap: 'wrap',
    '.card': {
      flexDirection: 'column',
      width: 350,
      img: { height: 350, width: '100%' },
      '@media (max-width: 950px)': { width: '75%' },
      '@media (max-width: 700px)': { width: '100%' },
    },
  },
  '&.side': {
    flexDirection: 'column',
    '.card': {
      width: '100%',
      img: {
        height: 300,
        width: 350,
        '@media (max-width: 950px)': { height: 350, width: '100%' },
      },
      '@media (max-width: 950px)': { flexDirection: 'column', width: '75%' },
      '@media (max-width: 700px)': { width: '100%' },
    },
  },
  '@media (max-width: 950px)': { flexDirection: 'column' },
});
