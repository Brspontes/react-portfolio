import { Button, Flex, Link } from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail, AiFillFileText } from 'react-icons/ai'
import './buttonsProfiles.css'

function ButtonsProfiles() {
  return (
    <Flex mt={['10', '20', '24']} className='directionFlex'>
    <Link href='mailto:brian.robert16@hotmail.com'>
      <Button leftIcon={<AiOutlineMail />} padding='6' className='bordaBotao linear-gradient-roxo' borderRadius='sm'>
        Enviar Email
      </Button>
    </Link>
    <Link href='https://www.linkedin.com/in/brian-pontes-420675a4/' isExternal>
      <Button leftIcon={<AiFillLinkedin />} padding='6' ml='4' className='bordaBotao linear-gradient-roxo2'>
        LinkedIn
      </Button>
    </Link>
    <Link className='align' href='https://www.instagram.com/__brianrobert/' isExternal>
      <Button leftIcon={<AiOutlineInstagram />} padding='6' ml='4' className='bordaBotao linear-gradient-azul'>
        Instagram
      </Button>
    </Link>
    <Link className='' href='https://github.com/Brspontes' isExternal>
      <Button leftIcon={<AiFillGithub />}  padding='6' ml='4' className='bordaBotao linear-gradient-azul2'>
        GitHub
      </Button>
    </Link>
    <Link className='' href='cv.pdf' isExternal>
      <Button leftIcon={<AiFillFileText />}  padding='6' ml='4' className='bordaBotao linear-gradient-azul2'>
        Currículo
      </Button>
    </Link>
  </Flex>
  )
}

export default ButtonsProfiles
