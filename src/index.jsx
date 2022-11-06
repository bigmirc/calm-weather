import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from '../src/styles/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={myTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
