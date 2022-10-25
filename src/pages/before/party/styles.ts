import { css } from '@emotion/react';

export const bonus = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    button: {
        backgroundColor: 'var(--green)',
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