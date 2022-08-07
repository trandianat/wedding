import { css } from '@emotion/react';

export const nav = css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: 12,
    width: 800,
    a: { textDecoration: 'none', whiteSpace: 'nowrap', ':hover': { color: 'var(--brown)' } },
    h1: { fontWeight: 'bold', '::before': { content: '"B&D"' } },
    '.pages': {
        alignItems: 'center',
        display: 'flex',
        gap: 36,
        '.active': { fontWeight: 'bold' },
        a: { fontWeight: 'normal', letterSpacing: 1 },
        div: {
            borderBottom: '1px solid var(--white)',
            paddingBottom: 3,
            ':hover': { borderBottom: '1px solid var(--green)', color: 'var(--green)' },
        },
    },
    '@media screen and (max-width: 950px)': {
        flexDirection: 'column',
        gap: 12,
        width: 'min-content',
        'h1::before': { content: '"Brendan & Diana"' },
        '.main': { display: 'none' } }
});