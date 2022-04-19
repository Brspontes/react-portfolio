import { Flex, Image, Text, Button, useColorMode, Link } from "@chakra-ui/react";
import { AiFillGithub } from 'react-icons/ai'
import './card.css'

interface CardProps {
  Title: string,
  Description: string,
  Image: string,
  Github: string
}

export default function Card(cardprops: CardProps) {

  const { colorMode } = useColorMode()

  return (
    <Flex direction='column' mt='10'>
      <Flex className={colorMode === 'light' ? 'card' : 'cardWhite'} border='1px' direction='column' maxW='96' height='500px'>
        <Image borderTopRadius='20' width='100%' height='60%' src={`projects/${cardprops.Image}`} />
        <Flex padding='4' direction='column' height='40%' justifyContent='space-between'>
          <Text className="bordaTextoSub" 
            bgGradient='linear(to bottom, #9845E8, #33D2FF, #DD5789)' 
            bgClip='text' fontWeight='extrabold' 
            fontSize='1.4rem'>{cardprops.Title}</Text>
          <Text textAlign='justify' fontSize='1rem'>{cardprops.Description}</Text>
          <Flex mt='2'>
            <Link href={cardprops.Github} isExternal>
              <Button leftIcon={<AiFillGithub />}>Github</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
