import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';
import '../globalStylesheet.css';
import { WordPressBlocksProvider, fromThemeJson } from '@faustwp/blocks';
import blocks from '../wp-blocks';
import themeJson from '../theme.json';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <WordPressBlocksProvider config={{ blocks, theme: fromThemeJson(themeJson) }}>
        <Component {...pageProps} key={router.asPath} />
      </WordPressBlocksProvider>
    </FaustProvider>
  );
}
