import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Header from './components/header';
import {  ChakraProvider ,ColorModeScript  } from '@chakra-ui/react'
import theme from './theme';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={ theme }>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Header />
      <App />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
