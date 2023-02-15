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
    fontSize: '1.125rem',
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
    gap: 32,
    textAlign: 'center',
    div: {
        flex: 1,
        h2: {
            padding: '24px 0 12px',
            '@media (min-width: 701px) and (max-width: 950px)': { fontSize: '1.375rem' }
        },
        svg: { display: 'block', height: 100, margin: '0 auto' },
    },
    '@media (max-width: 700px)': { flexDirection: 'column', gap: 48 }
});

export const eventsSubtext = { fontSize: '.875rem', paddingTop: 12 };

export const eventsFooter = css({ fontSize: '.875rem', paddingTop: 28, textAlign: 'center' });

export const hotel = css({
    display: 'flex',
    gap: 32,
    button: { '@media (min-width: 451px) and (max-width: 950px)': { fontSize: '.875rem', padding: 12 } },
    '@media (max-width: 700px)': { flexDirection: 'column', gap: 18 }
});

export const hotelOnSite = { flex: 2 };

export const hotelOnSiteBody = css({
    display: 'flex',
    flexDirection: 'column',
    gap: 16
});

export const hotelOnSiteWarning = {
    backgroundColor: 'var(--beige)',
    border: '1px solid var(--dark-green)',
    padding: '16px 24px'
};

export const hotelOnSiteDetails = css({
    display: 'flex',
    gap: 24,
    button: { marginTop: 12 },
    div: {
        flex: 1,
        img: {
            height: 150,
            margin: '8px 0',
            objectFit: 'cover',
            width: '100%',
            '@media (max-width: 950px)': { height: 200 }
        }
    },
    '@media (max-width: 450px)': { flexDirection: 'column' }
});

export const hotelOffSite = { flex: 1 };

export const hotelOffSiteBody = css({ display: 'flex', flexDirection: 'column', gap: 16 });

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
        '@media (max-width: 700px)': { display: 'none' }
    },
    '@media (min-width: 701px)': { textAlign: 'center' }
});

export const registry = {
    display: 'flex',
    gap: 72,
    'div:last-child': {
        alignSelf: 'center',
        svg: {
            height: 175,
            '@media (max-width: 700px)': { display: 'none' }
        },
    },
    '@media (max-width: 700px)': { gap: 0 }
};