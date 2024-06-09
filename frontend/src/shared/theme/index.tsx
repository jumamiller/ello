import { ReactNode, useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import palette from './palette';
interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const themeOptions = useMemo(
        () => ({
            palette,
            shape: {
                borderRadius: 10,
            },
            typography: {
                body1: {
                    color: palette.primary.dark,
                },
                body2: {
                    color: palette.primary.dark,
                },
            }
        }),
        []
    );

    const theme = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
};

export default ThemeProvider;