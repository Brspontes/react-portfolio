import { Flex, Text, Box } from "@chakra-ui/react"
import { useState } from "react"
import { Experience } from '../../content/experience'
import ButtonWork from "../buttonWork"
import Skills from "../skills"

function ExperienceSection () {
  const [expericiaSelecionadaAtual, setExperienciaAtual] = useState('will')

  return (
  <Flex width='100%' maxWidth={1480} direction='column'>
    <Text mt='8' className="bordaTextoSub" 
      bgGradient='linear(to bottom, #9845E8, #33D2FF, #DD5789)' 
      bgClip='text' fontWeight='extrabold' 
      fontSize='2.5rem'>Experiência Profissional</Text>
    <Flex direction="row" justifyContent="space-between">
      <ol className="experiencia">
        <li id='will' className={expericiaSelecionadaAtual === 'will' ? 'activeList' : 'inactiveList'}>
          <ButtonWork imageLogo='will.png' setExperienciaAtual={setExperienciaAtual} textButton='Will Bank' textMethod='will' />
        </li>
        <li id='vortx' className={expericiaSelecionadaAtual === 'vortx' ? 'activeList' : 'inactiveList'}>
          <ButtonWork imageLogo='vortx.png' setExperienciaAtual={setExperienciaAtual} textButton='Vórtx' textMethod='vortx' />
        </li>
        <li id='funcao' className={expericiaSelecionadaAtual === 'funcao' ? 'activeList' : 'inactiveList'}>
          <ButtonWork imageLogo='funcao.png' setExperienciaAtual={setExperienciaAtual} textButton='Função Sistemas' textMethod='funcao' />
        </li>
        <li id='itau' className={expericiaSelecionadaAtual === 'itau' ? 'activeList' : 'inactiveList'}>
          <ButtonWork imageLogo='itau.png' setExperienciaAtual={setExperienciaAtual} textButton='Itaú-Unibanco' textMethod='itau' />
        </li>
        <li id='kcms' className={expericiaSelecionadaAtual === 'kcms' ? 'activeList' : 'inactiveList'}>
          <ButtonWork imageLogo='kcms.png' setExperienciaAtual={setExperienciaAtual} textButton='KCMS Intelligent Solutions' textMethod='kcms' />
        </li>
        <li id='flex' className={expericiaSelecionadaAtual === 'flex' ? 'activeList' : 'inactiveList'}>
          <ButtonWork imageLogo='fit.png' setExperienciaAtual={setExperienciaAtual} textButton='FIT - Instituto de Tecnologia' textMethod='flex' />
        </li>
      </ol>
      <Flex width='75%' ml={{ base: '10' }} mt='10' direction={{ base: 'column', md: 'column', lg: 'row' }}>
        <Flex minWidth='60%' direction='column'>
          <Box>
            <Text>Cargo: <strong>{ Experience.filter(c => c.CompanyNameFilter === expericiaSelecionadaAtual)[0].Occupation }</strong></Text>
            <Text>Período: <strong>{ Experience.filter(c => c.CompanyNameFilter === expericiaSelecionadaAtual)[0].Period }</strong></Text>
          </Box>
          {
            <ol className='atribuitions'>
              { Experience.filter(c => c.CompanyNameFilter === expericiaSelecionadaAtual)
                .map(c => c.Attribuitions.map(attr => {
                  return <li>{attr}</li>
                }))}
            </ol>
          }
        </Flex>
        <Skills />
      </Flex>
    </Flex>
  </Flex>
  )
}
 
export default ExperienceSection
