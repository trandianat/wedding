import { css } from '@emotion/react';

const app = css({
    height: '100%',
    a: {
        textDecoration: 'none',
        div: {
            fontSize: '1.5rem',
            position: 'relative',
            textAlign: 'center',
            top: '50%',
        },
    }
});

const before = css({
    backgroundColor: 'var(--green)',
    color: 'white',
    float: 'left',
    height: '100%',
    width: '50%',
    [':hover']: { span: { borderBottom: '1px solid var(--beige)', paddingBottom: 4 } },
});

const after = css({
    backgroundColor: 'var(--beige)',
    color: 'black',
    float: 'right',
    height: '100%',
    width: '50%',
    [':hover']: { span: { borderBottom: '1px solid black', paddingBottom: 4 } },
});

const logo = css({
    backgroundColor: 'var(--brown)',
    color: 'white',
    height: 220,
    left: 'calc(50% - 122px)',
    padding: 12,
    position: 'absolute',
    top: 'calc(50% - 122px)',
    width: 220,
});

const inner = css({
    border: '1px solid white',
    height: '100%',
    textAlign: 'center',
    span: { fontSize: '5rem', position: 'relative', top: '30%' }
});

export { after, app, before, inner, logo };