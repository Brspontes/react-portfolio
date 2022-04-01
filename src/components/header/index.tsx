import { Flex, Box, Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import './header.css'

function Header () {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex as='header' width="100%" maxWidth={1480} height="120" marginX="auto" marginTop="4" paddingX="6" align="center" justifyContent="space-between" fontSize="1.2rem">
      <Box>
        <p>BR.</p>
      </Box>
      <Flex direction="row-reverse">
        <nav>
          <ul>
            <li>Projetos</li>
            <li>Resume</li>
            <li>Contato</li>
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
  )
}

export default Header
