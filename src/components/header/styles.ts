import { css } from '@emotion/react';

export const nav = (before: boolean) =>
  css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '12px 0',
    width: 800,
    a: {
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ':hover': { color: 'var(--dark-green)' },
    },
    h1: {
      fontFamily: 'var(--cursive)',
      '::before': { content: before ? '"B&D"' : '"Brendan & Diana"' },
    },
    '.entry': {
      alignItems: 'center',
      display: 'flex',
      gap: 24,
      '.line': {
        backgroundColor: 'var(--dark-green)',
        height: 1,
        width: 100,
        '@media (min-width: 951px), (max-width: 600px)': { display: 'none' },
      },
    },
    '.pages': {
      display: 'flex',
      gap: 48,
      a: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'normal',
        gap: 8,
        letterSpacing: 1,
        textAlign: 'center',
        whiteSpace: 'normal',
        div: {
          borderBottom: '1px solid var(--white)',
          paddingBottom: 3,
        },
        svg: { height: 48 },
        ':hover': {
          div: {
            borderBottom: '1px solid var(--green)',
            color: 'var(--green)',
          },
        },
      },
      '.active': { fontWeight: 'bold' },
      '@media (min-width: 951px)': {
        alignItems: 'center',
        svg: { display: 'none' },
        '.rsvp': {
          backgroundColor: 'var(--green)',
          border: '2px solid var(--green)',
          color: 'var(--white)',
          fontFamily: 'var(--serif), Arial, Helvetica, sans-serif',
          letterSpacing: 2,
          padding: '12px 18px',
          ':hover': {
            backgroundColor: 'var(--white)',
            border: '2px solid var(--green)',
            color: 'var(--green)',
          },
        },
      },
      '@media (max-width: 950px)': {
        padding: '0 24px',
        a: { fontSize: '.75rem', width: 64 },
      },
      '@media (max-width: 475px)': { gap: 24 },
      '@media (max-width: 400px)': { gap: 12 },
      '@media (max-width: 360px)': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      },
    },
    '@media (max-width: 950px)': {
      flexDirection: 'column',
      gap: 12,
      padding: '12px 0 18px',
      width: 650,
      '@media (min-width: 351px)': {
        'h1::before': { content: '"Brendan & Diana"' },
      },
    },
    '@media (max-width: 700px)': { width: 'auto' },
    '@media (max-width: 350px)': { 'h1::before': { content: '"B&D"' } },
  });

export const scroll = css({
  backgroundColor: 'var(--white)',
  border: '1px solid var(--green)',
  borderRadius: 24,
  bottom: 16,
  cursor: 'pointer',
  fontSize: '1.5rem',
  padding: '8px 16px',
  position: 'fixed',
  right: 16,
  ':hover': {
    backgroundColor: 'var(--dark-green)',
    border: '1px solid var(--white)',
    color: 'var(--white)',
  },
});
