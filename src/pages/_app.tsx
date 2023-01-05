import '../../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Fragment } from 'react';
import NProgress from 'nprogress';

import { CacheProvider } from '@emotion/react';

import { AppPropsWithLayout } from 'src/types/layout';
import { createEmotionCache } from 'src/core/utils/create-emotion-cache';
import ThemeComponent from 'src/core/theme/ThemeComponent';
import { SettingsConsumer } from 'src/core/context/settingsContext';
import { Router } from 'next/router';
import { Provider } from 'react-redux';
import { store } from 'src/store';

const clientSideEmotionCache = createEmotionCache();

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

const App = (props: AppPropsWithLayout) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  const getLayout = Component.getLayout ?? ((page) => <Fragment>{page}</Fragment>);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>;
          }}
        </SettingsConsumer>
      </CacheProvider>
    </Provider>
  );
};

export default App;
