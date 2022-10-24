import React from 'react';

export const Link = ({
  children,
  url,
  ...rest
}: React.PropsWithChildren<
  { url: string } & React.HTMLAttributes<HTMLAnchorElement>
>): JSX.Element => (
  <a href={url} target="_blank" {...rest}>
    {children}
  </a>
);
