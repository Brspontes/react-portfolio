import { SiReact, SiCsharp, SiDocker, SiNodedotjs, SiVisualstudio,
  SiHtml5, SiAmazonaws, SiMicrosoftazure, SiPostgresql,
  SiJavascript, SiTypescript, SiMicrosoftsqlserver,
  SiAngular, SiGit, SiGithub, SiRabbitmq } from 'react-icons/si'
  import { Flex, Text } from "@chakra-ui/react"

function Skills () {
  return (
    <Flex minWidth='40%' mt={['10', '0', '0']} direction='column'>
      <Text fontSize='1.4rem'>Skills</Text>
      <hr />
        <Flex wrap='wrap' mt={5} justifyContent='space-around'>
          <SiReact size={40} />
          <SiCsharp size={40} />
          <SiDocker size={40} />
          <SiNodedotjs size={40} />
          <SiHtml5 size={40} />
        </Flex>
        <Flex wrap='wrap' mt={10} justifyContent='space-between'>
          <SiAmazonaws size={40} />
          <SiMicrosoftazure size={40} />
          <SiJavascript size={40} />
          <SiTypescript size={40} />
          <SiMicrosoftsqlserver size={40} />
          <SiPostgresql size={40} />
        </Flex>
        <Flex wrap='wrap' mt={10} justifyContent='space-around'>
          <SiAngular size={40} />
          <SiGit size={40} />
          <SiGithub size={40} />
          <SiRabbitmq size={40} />
          <SiVisualstudio size={40} />
        </Flex>
    </Flex>
  )
}

export default Skills
