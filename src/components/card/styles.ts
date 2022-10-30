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
  border: '1px solid var(--black)',
  flexDirection: 'column',
  '@media (min-width: 951px)': { flexDirection: 'row' },
  '@media (max-width: 950px)': { width: '75%' }
});

export const image = (position: string, side: boolean) => css({
  height: side ? 300 :  350,
  img: {
    height: side ? 300 : 350,
    objectFit: 'cover',
    objectPosition: position,
    width: side ? 350 : '100%',
    '@media (max-width: 950px)': { width: '100%' }
  }
});

export const description = { backgroundColor: 'var(--white)', padding: 24 };

export const role = { fontSize: '1.2rem' };