import { css } from '@emotion/react';

export const bonus = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 36,
    button: {
        backgroundColor: 'var(--green)',
        border: '2px solid var(--green)',
        borderRadius: 24,
        color: 'var(--white)',
        fontFamily: 'var(--sans)',
        letterSpacing: '.75px',
        padding: '12px 24px',
        width: 'fit-content',
        ':hover': {
            backgroundColor: 'var(--white)',
            border: '2px solid var(--green)',
            color: 'var(--green)',
            fontWeight: 'bold'
        }
    },
});