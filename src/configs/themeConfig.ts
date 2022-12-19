import { PaletteMode, Direction } from '@mui/material';
import Circle from 'mdi-material-ui/Circle';

import { Skin } from 'src/core/layouts/types';

type ThemeConfig = {
  name: String;
  skin: Skin;
  mode: PaletteMode;
  direction: Direction;
  navSubItemIcon: any;
};

const themeConfig: ThemeConfig = {
  name: 'MemoShop.',
  mode: 'light',
  direction: 'ltr',
  skin: 'default',
  navSubItemIcon: Circle /* Icon Element */,
};

export default themeConfig;
