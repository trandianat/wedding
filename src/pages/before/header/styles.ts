import { css } from '@emotion/react';

export const nav = css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '12px 0',
    width: 800,
    a: { textDecoration: 'none', whiteSpace: 'nowrap', ':hover': { color: 'var(--brown)' } },
    h1: { fontWeight: 'bold', '::before': { content: '"B&D"' } },
    '.entry': {
        alignItems: 'center',
        display: 'flex',
        gap: 24,
        '.display': {
            backgroundColor: 'var(--brown)',
            height: 1,
            width: 100,
            '@media (min-width: 951px), (max-width: 600px)': { display: 'none' }
        }
    },
    '.pages': {
        alignItems: 'center',
        display: 'flex',
        gap: 36,
        a: { fontWeight: 'normal', letterSpacing: 1 },
        div: {
            borderBottom: '1px solid var(--white)',
            paddingBottom: 3,
            ':hover': { borderBottom: '1px solid var(--green)', color: 'var(--green)' },
        },
        '.active': { fontWeight: 'bold' },
    },
    '@media (max-width: 950px)': {
        flexDirection: 'column',
        gap: 12,
        padding: '12px 0 20px',
        width: 650,
        'h1::before': { content: '"Brendan & Diana"' },
        '.rsvp': { display: 'none' }
    },
    '@media (max-width: 700px)': { width: 'auto' },
    '@media (max-width: 600px)': {
        '.pages': { flexDirection: 'column', gap: 8 }
    }
});