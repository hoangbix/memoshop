import { ReactNode } from 'react';

import { deepmerge } from '@mui/utils';
import { Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Settings } from 'src/core/context/settingsContext';

import overrides from './overrides';
import typography from './typography';

import themeOptions from './ThemeOptions';

import GlobalStyling from './globalStyles';
import UserThemeOptions from './UserThemeOptions';

interface Props {
  settings: Settings;
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  const { settings, children } = props;

  const coreThemeConfig = themeOptions(settings);

  let theme = createTheme(coreThemeConfig);

  const mergeComponentOverrides = (theme: Theme, settings: Settings) =>
    deepmerge({ ...overrides(theme, settings) }, UserThemeOptions()?.components);

  const mergeTypography = (theme: Theme) => deepmerge(typography(theme), UserThemeOptions()?.typography);

  theme = createTheme(theme, {
    components: { ...mergeComponentOverrides(theme, settings) },
    typography: { ...mergeTypography(theme) },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme, settings) as any} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
