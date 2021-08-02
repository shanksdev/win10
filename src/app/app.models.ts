export type Theme = 'dark'|'light'|'system';

export interface IAppState{
  appTheme : IAppThemeState,
  desktopMenuState : IAppDesktopMenuState
}

export interface IAppThemeState{
  theme: Theme;
  desktopMenuVisible:boolean;
}

export interface IAppDesktopMenuState{
  desktopMenuVisible:boolean
}
