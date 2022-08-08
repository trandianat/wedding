import { css } from '@emotion/react';

export const container = css({
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 950px)': {
        flexDirection: 'column',
        gap: 48
    }
});