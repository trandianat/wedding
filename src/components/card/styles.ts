import { css } from '@emotion/react';
import { Variant } from 'utils/types';

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

export const image = (position: string, variant: Variant) => css({
  height: 350,
  img: {
    height: 350,
    objectFit: 'cover',
    objectPosition: position,
    width: variant === Variant.SIDE ? 'auto' : '100%',
    '@media (max-width: 950px)': { width: '100%' }
  }
});

export const description = { backgroundColor: 'var(--white)', padding: 24 };

export const role = { fontSize: '1.2rem' };