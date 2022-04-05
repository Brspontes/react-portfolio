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
          <SiReact title='react' size={40} />
          <SiCsharp title='csharp' size={40} />
          <SiDocker title='docker' size={40} />
          <SiNodedotjs title='node' size={40} />
          <SiHtml5 title='html' size={40} />
        </Flex>
        <Flex wrap='wrap' mt={10} justifyContent='space-between'>
          <SiAmazonaws title='aws' size={40} />
          <SiMicrosoftazure title='azure' size={40} />
          <SiJavascript title='javascript' size={40} />
          <SiTypescript title='typescript' size={40} />
          <SiMicrosoftsqlserver title='sql' size={40} />
          <SiPostgresql title='postgress' size={40} />
        </Flex>
        <Flex wrap='wrap' mt={10} justifyContent='space-around'>
          <SiAngular title='angular' size={40} />
          <SiGit title='git' size={40} />
          <SiGithub title='github' size={40} />
          <SiRabbitmq title='rabbitmq' size={40} />
          <SiVisualstudio title='vs' size={40} />
        </Flex>
    </Flex>
  )
}

export default Skills
