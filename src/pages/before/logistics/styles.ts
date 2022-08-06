import { css } from '@emotion/react';

export const intro = css({
    '@media screen and (min-width: 951px)': { position: 'relative' }
});

export const introImg = {
    backgroundColor: '#F6F6F6',
    height: 300,
    width: 500,
    '@media screen and (max-width: 950px)': {
        margin: '0 auto',
    },
    '@media screen and (min-width: 951px)': {
        height: 400,
        width: 400,
    }
};

export const introText = css({
    backgroundColor: 'var(--white)',
    padding: 24,
    margin: '0 auto',
    width: 400,
    '@media screen and (min-width: 951px)': {
        left: 350,
        position: 'absolute',
        top: 50,
    }
});

export const introDetails = {
    border: '1px dotted var(--brown)',
    borderRadius: 12,
    fontSize: '18px',
    marginTop: 16,
    padding: '10px 24px 12px',
    'p:first-of-type': { marginTop: 8 }
};

export const events = css({
    display: 'flex',
    gap: 24,
    textAlign: 'center',
    div: {
        flex: 1,
        svg: { display: 'block', height: 100, margin: '0 auto' },
        h2: { padding: '24px 0 12px' }
    },
    '@media screen and (max-width: 700px)': { flexDirection: 'column', gap: 48 }
});

export const eventsFooter = css({ fontSize: 14, paddingTop: 28, textAlign: 'center' });

export const hotel = css({
    display: 'flex',
    gap: 32,
    '@media screen and (max-width: 700px)': { flexDirection: 'column', gap: 24 }
});

export const hotelOnSite = { flex: 2 };

export const hotelAlternatives = { flex: 1 };

export const hotelDivider = { backgroundColor: 'var(--brown)', width: 1 };

export const faqs = { display: 'flex', gap: 48 };

export const faqTitle = css({
    flexBasis: 0,
    textAlign: 'center',
    svg: { height: 135, marginTop: 12 }
});

export const faqText = css({
    display: 'grid',
    gridColumnGap: 32,
    gridRowGap: 16,
    gridTemplateColumns: 'min-content auto',
    div: { alignSelf: 'center' },
    'div:nth-of-type(odd)': {
        fontFamily: 'var(--serif)',
        fontSize: '22px',
        textAlign: 'right'
    }
});

export const registry = {
    display: 'flex',
    gap: 72,
    svg: { height: 175 }
};