import { Flex, Box, Button, useColorMode, Link, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import './header.css'
import { useEffect, useState } from 'react';

function Header () {
  const { colorMode, toggleColorMode } = useColorMode()
  const [scrollPosition, setScrollPosition] = useState(0);
  const [percentageOpacity, setPercentageOpacity] = useState('100&')

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
    if (scrollPosition > 0)
      setPercentageOpacity('80%')
    else
    setPercentageOpacity('100%')
  }, [scrollPosition])
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <Flex bgColor={colorMode === 'light' ? '#F5F5F5' : '#171c26'} position='fixed' width='100%' zIndex='overlay' opacity={percentageOpacity}>
      <Flex as='header' width="100%" maxWidth={1360} height="120" marginX="auto" 
        paddingX="6" align="center" justifyContent="space-between" fontSize={["1rem","1.2rem"]}>
          <Box>
            <Text display={scrollPosition > 0 ? 'none' : ''}>BR.</Text>
          </Box>
          <Flex direction="row-reverse">
            <nav>
              <ul>
                <li><Link href='#projects'>Projetos</Link></li>
                <li><Link href='#experience'>Experiência</Link></li>
                <li><Link href='#education'>Educação</Link></li>
                <li>
                  {colorMode === 'light' ? 
                    <Button onClick={toggleColorMode}><MoonIcon /></Button> :
                    <Button onClick={toggleColorMode}><SunIcon /></Button>
                  }
                </li>
              </ul>
            </nav>
          </Flex>  
      </Flex>
    </Flex>
  )
}

export default Header
