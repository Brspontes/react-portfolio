import { Flex, Box, Button, useColorMode, Link, Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import './header.css'
import { useEffect, useState } from 'react';

function Header () {
  const { colorMode, toggleColorMode } = useColorMode()
  const [scrollPosition, setScrollPosition] = useState(0);
  const [percentageOpacity, setPercentageOpacity] = useState('100%')
  const [colorMenu, setColorMenu] = useState('')

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
                <li>
                  <Link href='#experience' color={(scrollPosition > 700 && scrollPosition < 1091) ? 'blue.700' : colorMode === 'light' ? 'rgb(26, 32, 44)' : 'rgba(255, 255, 255, 0.92)'}>
                      Experiência
                  </Link>
                </li>
                <li>
                  <Link href='#education' color={(scrollPosition > 1091 && scrollPosition < 1780) ? 'blue.700' : colorMode === 'light' ? 'rgb(26, 32, 44)' : 'rgba(255, 255, 255, 0.92)'}>
                    Educação
                  </Link>
                </li>
                <li>
                  <Link href='#projects' color={(scrollPosition > 1781) ? 'blue.700' : colorMode === 'light' ? 'rgb(26, 32, 44)' : 'rgba(255, 255, 255, 0.92)'}>
                    Projetos
                  </Link>
                </li>
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
