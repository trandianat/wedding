import { css } from '@emotion/react';

const nav = css({
    alignItems: 'center',
    display: 'flex',
    gap: 24,
    padding: 24,
    a: {
        color: 'black',
        fontFamily: 'Helvetica',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        [':hover']: { textDecoration: 'underline' }
    }
});

export { nav };