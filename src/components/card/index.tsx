import { Flex, Image, Text, Button, useColorMode } from "@chakra-ui/react";
import { AiFillGithub } from 'react-icons/ai'
import './card.css'

export default function Card() {

  const { colorMode } = useColorMode()

  return (
    <Flex direction='column' mt='10'>
      <Flex className={colorMode === 'light' ? 'card' : 'cardWhite'} border='1px' direction='column' maxW='96' height='500px'>
        <Image borderTopRadius='20' width='100%' height='60%' src='projects/carbon.png' />
        <Flex padding='6' direction='column' height='40%' justifyContent='space-between'>
          <Text textAlign='justify' fontSize='1rem'>Este projeto consiste em realizar determinanda função e foi desenvolvida com diversas tecnologias</Text>
          <Flex mt='2'>
            <Button leftIcon={<AiFillGithub />}>Github</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
