import { Flex, Box, Link } from "@chakra-ui/react";
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'

export default function Footer() {
  return (
    <Flex mt='10' alignItems='center' justifyContent='center' borderTop='1px' width="100%" maxWidth={1360} height='240' marginX="auto" >
      <Flex mt='14' width='64' justifyContent='space-between'>
        <Box><Link href='https://www.linkedin.com/in/brian-pontes-420675a4/'><AiFillLinkedin size='50'/></Link></Box>
        <Box><Link href='https://www.instagram.com/__brianrobert/'><AiOutlineInstagram size='50'/></Link></Box>
        <Box><Link href='https://github.com/Brspontes'><AiOutlineMail size='50'/></Link></Box>
      </Flex>
    </Flex>
  )
}
