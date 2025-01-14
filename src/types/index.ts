import { ComponentType, ReactNode } from 'react';

type MainTypes = {
  testId?: string;
};

type ThemeProviderType<Theme> = ComponentType<{
  children?: ReactNode;
  theme?: Theme;
}>;

type MainState = {
  loading: boolean;
};

enum AppThemes {
  Dark = 'dark',
  Light = 'light',
}

export { AppThemes };

export type { ThemeProviderType, MainState };
export default MainTypes;
