import { css } from '@emotion/react';

const nav = css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: 12,
    width: 800,
    a: { textDecoration: 'none', whiteSpace: 'nowrap', ':hover': { color: 'var(--brown)' } },
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
    }
});

export { nav };