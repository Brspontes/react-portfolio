import { Flex, Box, Link } from "@chakra-ui/react";
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'

export default function Footer() {
  return (
    <Flex alignItems='center' justifyContent='center' borderTop='1px' width="100%" maxWidth={1360} height='240' marginX="auto" >
      <Flex width='64' justifyContent='space-between'>
        <Box><Link href='https://www.linkedin.com/in/brian-pontes-420675a4/' isExternal><AiFillLinkedin size='50'/></Link></Box>
        <Box><Link href='https://www.instagram.com/__brianrobert/' isExternal><AiOutlineInstagram size='50'/></Link></Box>
        <Box><Link href='mailto:brian.robert16@hotmail.com' isExternal><AiOutlineMail size='50'/></Link></Box>
      </Flex>
    </Flex>
  )
}
