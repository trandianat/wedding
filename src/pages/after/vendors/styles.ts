import { css } from '@emotion/react';

export const vendors = css({
  img: {
    marginTop: 24,
    width: '100%',
    '@media (max-width: 700px)': { height: 350, objectFit: 'cover' },
  },
  p: { marginBottom: 16 },
});
