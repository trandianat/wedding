import { css } from '@emotion/react';

const primary = css({
    backgroundColor: 'var(--green)',
    padding: '12px 0',
});

const primaryBorder = css({
    borderBottom: '1px solid white',
    borderTop: '1px solid white',
});

const secondary = css({
    backgroundColor: 'var(--beige)',
});

const secondaryContent = css({ margin: '0 auto', width: 800 });

export { primary, primaryBorder, secondary, secondaryContent };