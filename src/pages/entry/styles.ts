import { css } from '@emotion/react';

export const nav = css({
  display: 'flex',
  height: '100%',
  width: '100%',
  a: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    fontFamily: 'var(--serif)',
    letterSpacing: 1,
    justifyContent: 'center',
    textDecoration: 'none',
    div: { fontSize: '2rem', padding: 24, textAlign: 'center' },
  },
  '@media (max-width: 1000px)': { flexDirection: 'column' },
});

export const before = {
  backgroundColor: 'var(--green)',
  color: 'var(--white)',
  fontWeight: 'normal',
  ':hover': {
    span: { borderBottom: '1px solid var(--beige)', paddingBottom: 4 },
  },
};

export const after = {
  backgroundColor: 'var(--beige)',
  color: 'var(--black)',
  fontWeight: 'normal',
  ':hover': {
    span: { borderBottom: '1px solid var(--black)', paddingBottom: 4 },
  },
};

export const logo = css({
  backgroundColor: 'var(--brown)',
  height: 220,
  left: 'calc(50% - 122px)',
  padding: 12,
  position: 'absolute',
  top: 'calc(50% - 122px)',
  width: 220,
  div: {
    border: '1px solid var(--white)',
    height: '100%',
    textAlign: 'center',
    span: {
      color: 'var(--white)',
      fontFamily: 'var(--serif)',
      fontSize: '5rem',
      lineHeight: '5rem',
      position: 'relative',
      top: 'calc(50% - 2.5rem)',
    },
  },
  '@media (max-width: 1200px), (max-height: 500px)': {
    height: 110,
    left: 'calc(50% - 67px)',
    top: 'calc(50% - 67px)',
    width: 110,
    div: {
      span: { fontSize: '2rem', lineHeight: '2rem', top: 'calc(50% - 1rem)' },
    },
  },
  '@media (max-width: 1000px) and (max-height: 500px)': { display: 'none' },
});
