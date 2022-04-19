import { Flex, Text, useColorMode, Box } from '@chakra-ui/react';
import ButtonsProfiles from '../components/ButtonsProfiles'
import ExperienceSection from '../components/experience/experience';
import React from 'react';
import './App.css';
import Education from '../components/education';
import Card from '../components/card';

function App() {
  const { colorMode } = useColorMode()
   
  return (
    <>
      <Flex direction="column">
        <Flex width="100%" maxWidth={1360} marginX="auto" marginTop="4" paddingX="6" direction="column">
          <Flex direction="column">
            <Text fontSize="1.2rem">
              Hello World, Eu sou
            </Text>
            <Text fontSize={{ base: '3rem', md: '6rem', lg: '8rem' }}
              className="bordaTexto"
              bgGradient='linear(to bottom, #9845E8, #33D2FF)' bgClip='text' fontWeight='extrabold'>
              Brian Robert
            </Text>
            <Text textAlign="justify" lineHeight="200%">
              Atualmente sou desenvolvedor Sênior no Will Bank, já atuo com tecnologia desde 2014, onde dei início a carreira e conforme os anos iam se passando o amor por essa área aumentava constantemente. 
              Já passei por algumas empresas, de todos os tamanhos, sou formado em Ciência da Computação e Pós Graduado em Arquitetura de Software e Soluções. Espero que encontre o que busca neste perfil e 
              caso queira se comunicar comigo, por gentileza utilize os botões de contato, logo abaixo. Caso queira jogar vídeo game, meu Id da PlayStation é <strong>Brspontes</strong>.
              <br />
              <br />
              Grande Abraço! 
            </Text>
          </Flex>
          <ButtonsProfiles />
        </Flex>
        <Flex bgColor={colorMode === 'light' ? '#F5F5F5' : '#171c26'} mt='8'>
          <Flex width='100%' maxWidth={1360} marginX='auto' marginTop='4' paddingX='6' direction='column' paddingBottom='40'>
            <ExperienceSection />
            <Education />
            <Flex justifyContent='space-between' width='100%' mt='10' direction='row' wrap='wrap'>
                <Card />
                <Card />
                <Card />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default App
