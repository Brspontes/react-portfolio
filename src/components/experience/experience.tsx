import { Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Experience } from '../../content/experience'
import ButtonWork from "../buttonWork"

function ExperienceSection () {
  const [expericiaSelecionadaAtual, setExperienciaAtual] = useState('vortx')

  return (
  <Flex width='100%' maxWidth={1480} marginX='auto' marginTop='4' paddingX='6' direction='column'>
    <Text mt='10' fontSize='1.2rem'>Experiência Profissional</Text>
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
      <Flex width="75%" ml={{ base: '10' }} mt='10' direction='column'>
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} justifyContent='space-between'>
          <Text>Cargo: <strong>{ Experience.filter(c => c.CompanyNameFilter === expericiaSelecionadaAtual)[0].Occupation }</strong></Text>
          <Text>Período: <strong>{ Experience.filter(c => c.CompanyNameFilter === expericiaSelecionadaAtual)[0].Period }</strong></Text>
        </Flex>
        {
          <ol className='atribuitions'>
            { Experience.filter(c => c.CompanyNameFilter === expericiaSelecionadaAtual)
              .map(c => c.Attribuitions.map(attr => {
                return <li>{attr}</li>
              }))}
          </ol>
        }
      </Flex>
    </Flex>
  </Flex>
  )
}
 
export default ExperienceSection
