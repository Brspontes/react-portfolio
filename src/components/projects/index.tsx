import { Flex, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { projectsContent } from "../../content/projects";
import Card from "../card";

export default function Projects() {

  const [pagination, setPagination] = useState([0])
  const [pageSelected, setPageSeleted] = useState(1)
  const [cards, setCards] = useState(projectsContent)

  function ConfigurePages (): void {
    const cardPages = 3
    const quantityPages = projectsContent.length / cardPages
    const quantityPagesTotal = projectsContent.length - (quantityPages * cardPages) === 0 ? quantityPages : (quantityPages + 1)

    let buttons: number[] = []
    for (let index = 0; index < quantityPagesTotal; index++) {
      buttons.push(index + 1)
    }

    setPagination(buttons)
    setCards(projectsContent.slice(0, 3))
  }
  
  useEffect(() => {
    ConfigurePages()
  }, [])

  useEffect(() => {
    const cardPages = 3
    setCards(projectsContent.slice((3 - (pageSelected * cardPages)), (pageSelected * cardPages)))
  }, [pageSelected])
  

  return (
    <Flex direction='column' mt='24'>
      <Text mt='8' className="bordaTextoSub" 
        bgGradient='linear(to bottom, #9845E8, #33D2FF, #DD5789)' 
        bgClip='text' fontWeight='extrabold' 
        fontSize='2.5rem'>Alguns Projetos</Text>
      <Flex justifyContent='space-between' width='100%' mt='4' direction={['column','row','row']} wrap='wrap'>
        {cards.map(card => {
          return <Card Title={card.Title} Description={card.Description} Image={card.Image} Github={card.Github} />
          })
        }
      </Flex>
      <Flex mt='10' width='100%' justifyContent='center'>
        <Flex width='24' justifyContent='space-around'>
            {pagination.map(pg => {
                return <Button onClick={() => setPageSeleted(pg)}>{pg}</Button>
              }) 
            }
        </Flex>
      </Flex>
    </Flex>
  )
}
