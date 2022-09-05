import React from 'react';
import { CacheProvider, Global } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '@/common/styles/utils/createEmotionCache';
import lightTheme from '@/common/styles/theme/lightTheme';
import { globals } from '@/common/styles/globalStyles';

import type { AppProps } from 'next/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

const clientSideEmotionCache = createEmotionCache();

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={lightTheme}>
        <Global styles={globals} />
        <CssBaseline />
        <Component {...pageProps} />;
      </ThemeProvider>
    </CacheProvider>
  );
}

export default NextApp;
