import { css } from '@emotion/react';

const common = {
  border: '1px solid var(--white)',
  color: 'var(--black)',
  display: 'flex',
  height: 'min-content',
  '@media (max-width: 950px)': { margin: '0 auto', width: '75%' },
  '@media (max-width: 700px)': { width: '100%' },
};

export const stack = css({ ...common, flexDirection: 'column', width: 350 });

export const side = css({
  ...common,
  flexDirection: 'column',
  '@media (min-width: 951px)': { flexDirection: 'row' }
});

export const image = { height: 250 };

export const description = { backgroundColor: 'var(--white)', padding: 24 };

export const role = { fontSize: '1.2rem' };