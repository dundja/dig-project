import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { ProductProvider } from './context/productContext';

import GlobalStyles from './utils/globals';
import theme from './utils/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ProductProvider>
      <App />
      <GlobalStyles />
    </ProductProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
