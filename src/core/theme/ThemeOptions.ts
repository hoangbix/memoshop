import { deepmerge } from '@mui/utils';
import { ThemeOptions } from '@mui/material';

import { Settings } from 'src/core/context/settingsContext';

import palette from './palette';
import spacing from './spacing';
import shadows from './shadows';
import breakpoints from './breakpoints';

const themeOptions = (settings: Settings): ThemeOptions => {
  const { skin, mode, direction, themeColor } = settings;

  const userThemeConfig: any = Object.assign({});

  delete userThemeConfig.components;
  delete userThemeConfig.typography;

  const mergedThemeConfig = deepmerge(
    {
      direction,
      palette: palette(mode, skin),
      typography: {
        fontFamily: `'Quicksand', sans-serif`,
      },
      shadows: shadows(mode),
      ...spacing,
      breakpoints: breakpoints(),
      shape: {
        borderRadius: 10,
      },
      mixins: {
        toolbar: {
          minHeight: 64,
        },
      },
    },
    userThemeConfig
  );

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...mergedThemeConfig.palette[themeColor],
      },
    },
  });
};

export default themeOptions;
