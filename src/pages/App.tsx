import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import './App.css';

function App() {
  return (
    <Flex width="100%" maxWidth={1480} height="120" marginX="auto" marginTop="4" paddingX="6" direction="column">
      <Flex direction="column">
        <Text fontSize="1.2rem">
          Hello World, Eu sou
        </Text>
        <Text fontSize={{ base: '3rem', md: '8rem', lg: '10.25rem' }}
          className="bordaTexto"
          bgGradient='linear(to-l, #9845E8, #33D2FF, #DD5789)' bgClip='text' fontWeight='extrabold'>
          Brian Robert
        </Text>
        <Text textAlign="justify" lineHeight="200%">
          Atualmente sou desenvolvedor Sênior no Will Bank, já atuo com tecnologia desde 2014, onde dei início a carreira e conforme os anos iam se passando o amor por essa área aumentava constantemente. 
          Já passei por algumas empresas, de todos os tamanhos, sou formado em Ciência da Computação e Pós Graduado em Arquitetura de Software e Soluções. Espero que encontre o que busca neste perfil e 
          caso queira se comunicar comigo, por gentileza utilize o formulário de contato. Caso queira jogar vídeo game, meu Id da PlayStation é <strong>Brspontes</strong>.
          <br />
          <br />
          Grande Abraço! 
        </Text>
      </Flex>
    </Flex>
  )
}

export default App
