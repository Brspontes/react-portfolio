import { Button, Image } from "@chakra-ui/react"
import './buttonWork.css'

interface ButtonProps {
  imageLogo: string,
  textButton: string,
  textMethod: string
  setExperienciaAtual: (valor: string) => void
}

function ButtonWork({ imageLogo, setExperienciaAtual, textButton, textMethod }: ButtonProps) {
  return (
    <Button _focus={{ outline: 0 }} width="250px" bgColor="transparent" rightIcon={<Image src={imageLogo} width="25px" height="25px" alt={imageLogo} />}
    justifyContent="space-between" border="none" className="hidden" variant="link" onClick={() => setExperienciaAtual(textMethod)} >{textButton}</Button>
  )
}

export default ButtonWork
