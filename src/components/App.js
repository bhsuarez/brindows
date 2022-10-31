import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Desktop from './Desktop';

const dataService = new DataService();

const BodyOverride = createGlobalStyle`
  body{
    font-size: 15px;
    background-color: #d0c7bc;
  }
`;


const App = () => (
  <DataContext.Provider value={dataService}>
      <ThemeProvider>
        <GlobalStyle />
        <BodyOverride />
        <Desktop />
        <Taskbar />
      </ThemeProvider>
  </DataContext.Provider>
);
export default App;
