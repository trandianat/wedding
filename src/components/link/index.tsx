import React from 'react';

export const Link = ({
  children,
  url,
}: React.PropsWithChildren<{ url: string }>): JSX.Element => (
  <a href={url} target="_blank">
    {children}
  </a>
);
