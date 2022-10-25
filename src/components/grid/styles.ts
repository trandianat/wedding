import { css } from '@emotion/react';

export const grid = css({
    display: 'grid',
    gridColumnGap: 32,
    gridRowGap: 16,
    gridTemplateColumns: 'auto auto',
    div: { alignSelf: 'center' },
    'div:nth-of-type(odd)': {
        fontFamily: 'var(--serif)',
        fontSize: '1.375rem',
        letterSpacing: 1,
        textAlign: 'right'
    }
});