import { css } from '@emotion/react';

const nav = css({
    display: 'flex',
    height: '100%',
    width: '100%',
    a: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        fontFamily: 'var(--serif)',
        letterSpacing: 1,
        justifyContent: 'center',
        textDecoration: 'none',
        div: { fontSize: '2rem' },
    },
    ['@media screen and (max-width: 1200px)']: { flexDirection: 'column' },
});

const before = css({
    backgroundColor: 'var(--green)',
    color: 'var(--white)',
    fontWeight: 'normal',
    ':hover': { span: { borderBottom: '1px solid var(--beige)', paddingBottom: 4 } },
});

const after = css({
    backgroundColor: 'var(--beige)',
    color: 'black',
    fontWeight: 'normal',
    ':hover': { span: { borderBottom: '1px solid black', paddingBottom: 4 } },
});

const logo = css({
    backgroundColor: 'var(--brown)',
    height: 220,
    left: 'calc(50% - 122px)',
    padding: 12,
    position: 'absolute',
    top: 'calc(50% - 122px)',
    width: 220,
    div: {
        border: '1px solid var(--white)',
        height: '100%',
        textAlign: 'center',
        span: {
            color: 'var(--white)',
            fontFamily: 'var(--serif)',
            fontSize: '5rem',
            lineHeight: '5rem',
            position: 'relative',
            top: 'calc(50% - 2.5rem)'
        }
    },
    ['@media screen and (max-width: 1000px)']: {
        height: 110,
        left: 'calc(50% - 67px)',
        top: 'calc(50% - 67px)',
        width: 110,
        div: { span: { fontSize: '2rem', lineHeight: '2rem', top: 'calc(50% - 1rem)' }}
    },
});

export { after, before, logo, nav };