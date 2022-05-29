import { css } from '@emotion/react';

const nav = css({
    display: 'flex',
    height: '100%',
    width: '100%',
    a: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        textDecoration: 'none',
        div: { fontSize: '2rem' },
    },
    ['@media screen and (max-width: 1200px)']: { flexDirection: 'column' }
});

const before = css({
    backgroundColor: 'var(--green)',
    color: 'white',
    [':hover']: { span: { borderBottom: '1px solid var(--beige)', paddingBottom: 4 } },
});

const after = css({
    backgroundColor: 'var(--beige)',
    color: 'black',
    [':hover']: { span: { borderBottom: '1px solid black', paddingBottom: 4 } },
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
        border: '1px solid white',
        height: '100%',
        textAlign: 'center',
        span: {
            color: 'white',
            fontSize: '5rem',
            position: 'relative',
            top: 'calc(50% - 45px)'
        }
    }
});

export { after, before, logo, nav };