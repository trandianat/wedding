import { css } from '@emotion/react';

export const activities = {
    h2: { marginBottom: 8 },
};

export const winery = css({
    display: 'flex',
    gap: 6,
    justifyContent: 'space-between',
    '@media (max-width: 700px)': { flexDirection: 'column' },
});