interface Project {
  Title: string,
  Description: string,
  Image: string, 
  Github: string
}

export const projectsContent: Project[] = [
  {
    Title: 'NerdStore',
    Description: 'Projeto para o curso do Desenvolveedor.io, realizado com arquitetura distribuida e utilizando AspNetCore',
    Image: 'nerdstore.png',
    Github: 'https://github.com/Brspontes/dotnet-nerdstore'
  },
  {
    Title: 'Chakra Usage',
    Description: 'Projeto para o curso do Ignite, utilizando react com nextjs e typescript, desafio visando responsividade',
    Image: 'chackrachalange.png',
    Github: 'https://github.com/Brspontes/react-chakra-challenge'
  },
  {
    Title: 'Drop Down',
    Description: 'Projeto realizado para praticar com a biblioteca de dropdown do react, utilizando react e typescript',
    Image: 'dropdown.png',
    Github: 'https://github.com/Brspontes/react-todo-dnd'
  },
  {
    Title: 'Poke Api',
    Description: 'Projeto para se atualizar com .Net5, foi desenvolvido uma API que trás por região os pokemons e suas informações tratadas',
    Image: 'pokeapi.png',
    Github: 'https://github.com/Brspontes/pokeapi-net5'
  },
  {
    Title: 'Landing page',
    Description: 'Projeto para testar features do chakra ui, realizando desenvolvimento de uma landing page',
    Image: 'ghostpage.png',
    Github: 'https://github.com/Brspontes/react-ghostpage'
  },
  {
    Title: 'Portfólio',
    Description: 'Projeto realizado para demonstrar experiência profissional, como se fosse um currículo online, desenvolvido com reactjs',
    Image: 'portfolio.png',
    Github: 'https://github.com/Brspontes/react-portfolio'
  }
]
