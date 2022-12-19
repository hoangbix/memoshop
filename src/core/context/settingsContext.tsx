import { Skin, ThemeColor } from 'src/core/layouts/types';
import { PaletteMode, Direction } from '@mui/material';
import { createContext, ReactNode, useEffect, useState } from 'react';
import themeConfig from 'src/configs/themeConfig';

export type Settings = {
  skin: Skin;
  mode: PaletteMode;
  direction: Direction;
  themeColor: ThemeColor;
};

export type PageSpecificSettings = {
  skin?: Skin;
  mode?: PaletteMode;
  direction?: Direction;
  themeColor?: ThemeColor;
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};

interface SettingsProviderProps {
  children: ReactNode;
  pageSettings?: PageSpecificSettings | void;
}

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  direction: themeConfig.direction,
  skin: 'default',
};

export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
});

const restoreSettings = (): Settings | null => {
  let settings = null;

  try {
    const storedData: string | null = window.localStorage.getItem('settings');

    if (storedData) {
      settings = { ...JSON.parse(storedData) };
    } else {
      settings = initialSettings;
    }
  } catch (err) {
    console.error(err);
  }

  return settings;
};

export const SettingsProvider = ({ children, pageSettings }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings({ ...restoredSettings });
    }
    if (pageSettings) {
      setSettings({ ...settings, ...pageSettings });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSettings]);

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings);
  };

  return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>;
};

export const SettingsConsumer = SettingsContext.Consumer;
