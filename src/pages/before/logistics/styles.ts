import { css } from '@emotion/react';

const intro = css({
    backgroundColor: 'var(--beige)',
    padding: '48px 0',
});

const introContent = css({
    margin: '0 auto',
    position: 'relative',
    width: 800
});

const introImg = css({
    backgroundColor: '#F6F6F6',
    height: 400,
    width: 400
});

const introText = css({
    backgroundColor: 'white',
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
    backgroundColor: 'var(--green)',
    color: 'white',
    padding: '12px 0'
});

const eventsBorder = css({
    borderBottom: '1px solid white',
    borderTop: '1px solid white',
});

const eventsContent = css({
    display: 'flex',
    gap: 24,
    margin: '0 auto',
    paddingTop: 48,
    textAlign: 'center',
    width: 800,
    div: {
        flex: 1,
        svg: { display: 'block', height: 100, margin: '0 auto' },
        h2: { padding: '24px 0 12px' }
    }
});

const eventsFooter = css({ padding: '36px 0 48px', textAlign: 'center' });

const rooms = css({
    display: 'flex',
    gap: 32,
    padding: '48px 0',
    margin: '0 auto',
    width: 800,
});

const roomBlock = css({ flex: 2 });

const roomAlternatives = css({ flex: 1 });

const roomDivider = css({
    backgroundColor: 'var(--brown)',
    width: 1
});

const faqs = css({
    backgroundColor: 'var(--beige)',
    padding: '48px 0',
});

const faqContent = css({
    display: 'flex',
    gap: 48,
    margin: '0 auto',
    width: 800
});

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

const green = css({
    backgroundColor: 'var(--green)',
    color: 'white',
    padding: '12px 0'
});

const greenBorder = css({
    borderBottom: '1px solid white',
    borderTop: '1px solid white',
});

const greenContent = css({
    display: 'flex',
    gap: 72,
    margin: '0 auto',
    padding: '48px 0',
    width: 800,
    div: {
        svg: { height: 175 },
    }
});

export {
    events,
    eventsBorder,
    eventsContent,
    eventsFooter,
    faqContent,
    faqs,
    faqText,
    faqTitle,
    green,
    greenBorder,
    greenContent,
    intro,
    introContent,
    introDetails,
    introImg,
    introText,
    roomAlternatives,
    roomBlock,
    roomDivider,
    rooms
};