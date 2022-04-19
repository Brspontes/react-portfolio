import { Flex, Button, Text } from "@chakra-ui/react";
import Card from "../card";

export default function Projects() {
  return (
    <Flex direction='column' mt='24'>
      <Text mt='8' className="bordaTextoSub" 
        bgGradient='linear(to bottom, #9845E8, #33D2FF, #DD5789)' 
        bgClip='text' fontWeight='extrabold' 
        fontSize='2.5rem'>Alguns Projetos</Text>
      <Flex justifyContent='space-between' width='100%' mt='4' direction='row' wrap='wrap'>
          <Card />
          <Card />
          <Card />
      </Flex>
      <Flex mt='10' width='100%' justifyContent='center'>
        <Flex width='24' justifyContent='space-around'>
          <Button border='1px'>1</Button>
          <Button border='1px'>2</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
