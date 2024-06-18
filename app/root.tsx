import { ReactNode } from 'react';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import indexCss from './index.css?url';

export const links = () => [
  { rel: 'stylesheet', href: indexCss },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export const meta = () => {
  return [
    { title: 'amazing site' },
    { name: 'description', content: 'Welcome to amazing site' },
  ];
};

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <Meta />
        <Links />
        <title>amazing site</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
