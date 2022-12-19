import { Theme } from '@mui/material/styles';

import MuiInput from './input';
import MuiAvatar from './avatars';
import MuiTypography from './typography';
import { Settings } from 'src/core/context/settingsContext';

const Overrides = (theme: Theme, settings: Settings) => {
  const input = MuiInput(theme);
  const avatars = MuiAvatar(theme);

  return Object.assign(input, avatars, MuiTypography);
};

export default Overrides;
