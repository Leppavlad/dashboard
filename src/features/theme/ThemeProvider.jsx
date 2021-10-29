import React, { useState, useEffect } from 'react';

import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

import WebFont from 'webfontloader';
import { GlobalStyles } from './GlobalStyles';
import { useTheme } from './useTheme';

const Container = styled.div``;

export function ThemeProvider({ children }) {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  });
  // useEffect(() => {
  //   setSelectedTheme(theme);
  // }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <>
      {themeLoaded && (
        <StyledThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            {children}
          </Container>
        </StyledThemeProvider>
      )}
    </>
  );
}
