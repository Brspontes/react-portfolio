import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import { ChakraProvider  } from '@chakra-ui/react'
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme= { theme }>
      <Header />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
