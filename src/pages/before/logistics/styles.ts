import { css } from '@emotion/react';

export const intro = css({
    img: {
        height: 650,
        objectFit: 'cover',
        objectPosition: 'right bottom',
        width: '100%',
        '@media (max-width: 700px)': { height: 375 },
    },
    '@media (min-width: 701px)': { position: 'relative' }
});

export const introText = css({
    backgroundColor: 'var(--white)',
    fontSize: 18,
    padding: 24,
    '@media (min-width: 701px)': {
        backgroundColor: 'rgba(255, 255, 255, .6)',
        position: 'absolute',
        '@media (min-width: 951px)': { left: 64, top: 120 },
        '@media (max-width: 950px)': { left: 48, top: 48 },
    },
});

export const events = css({
    display: 'flex',
    gap: 24,
    textAlign: 'center',
    div: {
        flex: 1,
        h2: { padding: '24px 0 12px' },
        svg: { display: 'block', height: 100, margin: '0 auto' },
    },
    '@media (max-width: 700px)': { flexDirection: 'column', gap: 48 }
});

export const eventsSubtext = { fontSize: 14, paddingTop: 12 };

export const eventsFooter = css({ fontSize: 14, paddingTop: 28, textAlign: 'center' });

export const hotel = css({
    display: 'flex',
    gap: 32,
    '@media (max-width: 700px)': { flexDirection: 'column', gap: 18 }
});

export const hotelOnSite = { flex: 2 };

export const hotelAlternatives = { flex: 1 };

export const hotelDivider = { backgroundColor: 'var(--brown)', width: 1 };

export const faqs = css({
    display: 'flex',
    gap: 48,
    '@media (max-width: 700px)': {
        flexDirection: 'column',
        gap: 12
    }
});

export const faqTitle = css({
    flexBasis: 0,
    svg: {
        height: 135,
        marginTop: 12,
        '@media (max-width: 700px)': {
            display: 'none'
        }
    },
    '@media (min-width: 701px)': { textAlign: 'center' }
});

export const faqText = css({
    display: 'grid',
    gridColumnGap: 32,
    gridRowGap: 16,
    gridTemplateColumns: 'min-content auto',
    div: { alignSelf: 'center' },
    'div:nth-of-type(odd)': {
        fontFamily: 'var(--serif)',
        fontSize: 22,
        textAlign: 'right'
    }
});

export const registry = {
    display: 'flex',
    gap: 72,
    svg: {
        height: 175,
        '@media (max-width: 700px)': { display: 'none' }
    },
    '@media (max-width: 700px)': { gap: 0 }
};