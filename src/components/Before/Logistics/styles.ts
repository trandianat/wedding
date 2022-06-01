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
    backgroundColor: 'lightgray',
    height: 300,
    width: 400
});

const introText = css({
    backgroundColor: 'white',
    height: 150,
    left: 350,
    padding: 24,
    position: 'absolute',
    top: 50,
    width: 400
});

const events = css({
    backgroundColor: 'var(--green)',
});

const eventsContent = css({
    color: 'white',
    display: 'flex',
    gap: 24,
    margin: '0 auto',
    padding: '48px 0',
    textAlign: 'center',
    width: 800,
    div: {
        flex: 1,
        svg: { display: 'block', height: 150, margin: '0 auto' },
        h2: { padding: '24px 0' }
    }
});

const ceremony = css({
});

const cocktails = css({});

const reception = css({});

export { ceremony, cocktails, events, eventsContent, intro, introContent, introImg, introText, reception };