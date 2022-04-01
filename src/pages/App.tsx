import { Flex, Text, Button,  useColorMode } from '@chakra-ui/react';
import ButtonsProfiles from '../components/ButtonsProfiles'
import React, { useState } from 'react';
import './App.css';

function App() {
  const [expericiaSelecionadaAtual, setExperienciaAtual] = useState("")
  const { colorMode } = useColorMode()
  
  return (
    <>
      <Flex direction="column">
        <Flex width="100%" maxWidth={1480} marginX="auto" marginTop="4" paddingX="6" direction="column">
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
          <ButtonsProfiles />
        </Flex>
        <Flex bgColor={colorMode === "light" ? "#F5F5F5" : "#171c26"} mt="20">
          <Flex width="100%" maxWidth={1480} marginX="auto" marginTop="4" paddingX="6" direction="column">
          <Text mt="10" fontSize="1.2rem">Experiência Profissional</Text>
            <Flex direction="row" justifyContent="space-between">
              <ol className="experiencia">
                <li id='will' className={expericiaSelecionadaAtual === 'will' ? "activeList" : "inactiveList"}>
                  <Button _focus={{ outline: 0 }} width="250px" textAlign="left" bgColor="transparent" border="none" variant="link" onClick={() => setExperienciaAtual('will')} >Will Bank</Button>
                </li>
                <li id='vortx' className={expericiaSelecionadaAtual === 'vortx' ? "activeList" : "inactiveList"}>
                  <Button _focus={{ outline: 0 }} width="250px" textAlign="left" bgColor="transparent" border="none" variant="link" onClick={() => setExperienciaAtual('vortx')}>Vórtx</Button>
                </li>
                <li id='funcao' className={expericiaSelecionadaAtual === 'funcao' ? "activeList" : "inactiveList"}>
                  <Button _focus={{ outline: 0 }} width="250px" textAlign="left" bgColor="transparent" border="none" variant="link" onClick={() => setExperienciaAtual('funcao')}>Função Sistemas</Button>
                </li>
                <li id='itau' className={expericiaSelecionadaAtual === 'itau' ? "activeList" : "inactiveList"}>
                  <Button _focus={{ outline: 0 }} width="250px" textAlign="left" bgColor="transparent" border="none" variant="link" onClick={() => setExperienciaAtual('itau')}>Itaú-Unibanco</Button>
                </li>
                <li id='kcms' className={expericiaSelecionadaAtual === 'kcms' ? "activeList" : "inactiveList"}>
                  <Button _focus={{ outline: 0 }} width="250px" textAlign="left" bgColor="transparent" border="none" variant="link" onClick={() => setExperienciaAtual('kcms')}>KCMS Intelligent Solutions</Button>
                </li>
                <li id='flex' className={expericiaSelecionadaAtual === 'flex' ? "activeList" : "inactiveList"}>
                  <Button _focus={{ outline: 0 }} width="250px" textAlign="left" bgColor="transparent" border="none" variant="link" onClick={() => setExperienciaAtual('flex')}>Flextronics Instituto de Tecnologia</Button>
                </li>
              </ol>
              <Flex mt="10">
                Texto
              </Flex>
              <Flex mt="10">
                Texto
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default App
