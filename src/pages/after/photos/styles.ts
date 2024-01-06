import { css } from '@emotion/react';

export const photos = css({
  display: 'grid',
  gap: 16,
  gridAutoRows: '1fr',
  gridTemplateColumns: '1fr 1fr 1fr',
  marginTop: 24,
  a: {
    backgroundColor: 'var(--white)',
    border: '1px solid var(--black)',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'normal',
    gap: 8,
    padding: 16,
    textDecoration: 'none',
    h3: { fontFamily: 'var(--serif-italic)' },
    img: { objectFit: 'cover', width: '100%' },
    p: { lineHeight: 1.375 },
    span: { fontWeight: 500 },
    ':hover': { boxShadow: '0 4px 8px -2px var(--dark-gray)' },
  },
  '@media (max-width: 700px)': {
    gridAutoRows: 'auto',
    gridTemplateColumns: '1fr',
    img: { height: 250, objectFit: 'cover' },
  },
});
