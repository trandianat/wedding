import { css } from '@emotion/react';

const nav = css({
    alignItems: 'center',
    display: 'flex',
    gap: 36,
    padding: 12,
    a: {
        color: 'black',
        fontFamily: 'Karla',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        div: { borderBottom: '1px solid white', paddingBottom: 2 },
        [':hover']: { div: { borderBottom: '1px solid var(--brown)', paddingBottom: 2 } }
    }
});

export { nav };