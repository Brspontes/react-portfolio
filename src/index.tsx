import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import {  ChakraProvider ,ColorModeScript  } from '@chakra-ui/react'
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={ theme }>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Header />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)