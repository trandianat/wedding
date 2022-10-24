import { css } from '@emotion/react';

export const story = {
    'p:not(:last-child)': { marginBottom: 12 }
};

export const beginning = css({
    display: 'flex',
    gap: 24,
    '@media (max-width: 950px)': { flexDirection: 'column' },
});

export const polaroid = css({
    alignSelf: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    height: 'fit-content',
    padding: 24,
    width: 'fit-content',
    img: {
        height: 325,
        objectFit: 'cover',
        objectPosition: 'top',
        width: 325,
    },
    p: {
        color: 'var(--black)',
        fontSize: '.875rem',
        lineHeight: 1.2,
        width: 325,
    }
});

export const engagement = css({
    display: 'flex',
    gap: 16,
    '@media (max-width: 700px)': { flexDirection: 'column' },
    img: { height: 300, objectFit: 'cover' },
    div: { alignSelf: 'center' },
});