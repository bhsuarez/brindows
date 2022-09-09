import React from 'react';
import { GlobalStyle, ThemeProvider, Button } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Desktop from './Desktop';
import { useClippy, ClippyProvider } from '@react95/clippy';
import '@react95/icons/icons.css';

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

const ClippyComponent = () => {
  const { clippy } = useClippy();
};

const App = () => (
  <DataContext.Provider value={dataService}>
    <ThemeProvider>
      <GlobalStyle />
      <BodyFontSizeOverride />

      <Desktop />
      <Taskbar />
    </ThemeProvider>
    <ClippyProvider>
      <ClippyComponent />
    </ClippyProvider>
  </DataContext.Provider>
);

export default App;
