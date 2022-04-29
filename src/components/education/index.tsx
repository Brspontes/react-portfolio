import { Flex, Text, Image, Box } from "@chakra-ui/react";

export default function Education() {
  return (
    <Flex id='education' mt='16' direction='column'>
      <Text 
        className="bordaTextoSub" 
        bgGradient='linear(to bottom, #9845E8, #33D2FF, #DD5789)' 
        bgClip='text' fontWeight='extrabold' fontSize='2.5rem'>Educação</Text>
      <Flex direction={['column', 'column', 'row']} justifyContent='space-around'>
        <Image mt='12' src='education.png' width='lg' />
        <Flex ml='18' direction='column' justifyContent='space-around'>
          <Box>
            <Text 
              fontWeight='bold' 
              fontSize='1.2rem'  
              bgGradient='linear(to bottom, #9845E8, #33D2FF, #DD5789)' 
              bgClip='text'>Bacharel</Text>
            <br />
            <Text><strong>Curso:</strong> Ciência da Computação</Text>
            <Text><strong>Instituição:</strong> Universidade Paulista</Text>
            <Text><strong>Conclusão:</strong> Dezembro, 2016</Text>
          </Box>
          <Box mt={{ base: '10', md: '5', lg: '5' }}>
            <Text 
              fontWeight='bold' 
              fontSize='1.2rem' 
              bgGradient='linear(to bottom, #9845E8, #33D2FF, #DD5789)' 
              bgClip='text'>Pós Graduação</Text>
            <br />
            <Text><strong>Curso:</strong> Arquitetura de Software e Soluções</Text>
            <Text><strong>Instituição:</strong> IGTI</Text>
            <Text><strong>Conclusão:</strong> Julho, 2022</Text>
          </Box>
          <Box mt={{ base: '10',  md: '5', lg: '5' }}>
            <Text 
              fontWeight='bold' 
              fontSize='1.2rem' 
              bgGradient='linear(to bottom, #9845E8, #33D2FF, #DD5789)' 
              bgClip='text'>Certificações</Text>
            <br />
            <Box>
              <Text><strong>Certificação:</strong> CPA-20</Text>
              <Text><strong>Instituição:</strong> Anbima</Text>
              <Text><strong>Validade:</strong> Julho, 2026</Text>
            </Box>
            <br />
            <Box>
              <Text><strong>Certificação:</strong>Scrum Fundamentals</Text>
              <Text><strong>Instituição:</strong> Scrum Study</Text>
              <Text><strong>Validade:</strong> Não expira</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
