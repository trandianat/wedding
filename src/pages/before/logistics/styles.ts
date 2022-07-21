import { css } from '@emotion/react';

const intro = css({ position: 'relative' });

const introImg = css({
    backgroundColor: '#F6F6F6',
    height: 400,
    width: 400
});

const introText = css({
    backgroundColor: 'var(--white)',
    left: 350,
    padding: 24,
    position: 'absolute',
    top: 50,
    width: 400
});

const introDetails = css({
    border: '1px dotted var(--brown)',
    borderRadius: 12,
    fontSize: '18px',
    marginTop: 16,
    padding: '10px 24px 12px',
    'p:first-of-type': { marginTop: 8 }
});

const events = css({
    display: 'flex',
    gap: 24,
    textAlign: 'center',
    div: {
        flex: 1,
        svg: { display: 'block', height: 100, margin: '0 auto' },
        h2: { padding: '24px 0 12px' }
    }
});

const eventsFooter = css({ fontSize: 14, paddingTop: 28, textAlign: 'center' });

const hotel = css({ display: 'flex', gap: 32 });

const hotelOnSite = css({ flex: 2 });

const hotelAlternatives = css({ flex: 1 });

const hotelDivider = css({ backgroundColor: 'var(--brown)', width: 1 });

const faqs = css({ display: 'flex', gap: 48 });

const faqTitle = css({
    flexBasis: 0,
    textAlign: 'center',
    svg: { height: 135, marginTop: 12 }
});

const faqText = css({
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

const registry = css({
    display: 'flex',
    gap: 72,
    svg: { height: 175 }
});

export {
    events,
    eventsFooter,
    faqs,
    faqText,
    faqTitle,
    hotel,
    hotelAlternatives,
    hotelDivider,
    hotelOnSite,
    intro,
    introDetails,
    introImg,
    introText,
    registry,
};