import { Flex, Text, useColorMode } from '@chakra-ui/react';
import ButtonsProfiles from '../components/ButtonsProfiles'
import ButtonWork from '../components/buttonWork';
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
                  <ButtonWork imageLogo='will.png' setExperienciaAtual={setExperienciaAtual} textButton='Will Bank' textMethod='will' />
                </li>
                <li id='vortx' className={expericiaSelecionadaAtual === 'vortx' ? "activeList" : "inactiveList"}>
                  <ButtonWork imageLogo='vortx.png' setExperienciaAtual={setExperienciaAtual} textButton='Vórtx' textMethod='vortx' />
                </li>
                <li id='funcao' className={expericiaSelecionadaAtual === 'funcao' ? "activeList" : "inactiveList"}>
                  <ButtonWork imageLogo='funcao.png' setExperienciaAtual={setExperienciaAtual} textButton='Função Sistemas' textMethod='funcao' />
                </li>
                <li id='itau' className={expericiaSelecionadaAtual === 'itau' ? "activeList" : "inactiveList"}>
                  <ButtonWork imageLogo='itau.png' setExperienciaAtual={setExperienciaAtual} textButton='Itaú-Unibanco' textMethod='itau' />
                </li>
                <li id='kcms' className={expericiaSelecionadaAtual === 'kcms' ? "activeList" : "inactiveList"}>
                  <ButtonWork imageLogo='kcms.png' setExperienciaAtual={setExperienciaAtual} textButton='KCMS Intelligent Solutions' textMethod='kcms' />
                </li>
                <li id='flex' className={expericiaSelecionadaAtual === 'flex' ? "activeList" : "inactiveList"}>
                  <ButtonWork imageLogo='fit.png' setExperienciaAtual={setExperienciaAtual} textButton='FIT - Instituto de Tecnologia' textMethod='flex' />
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
