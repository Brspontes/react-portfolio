interface ExperienceType {
    CompanyNameFilter: string,
    Occupation: string,
    Attribuitions: string[],
    Period: string
}


export const Experience: ExperienceType[] = [
  {
    CompanyNameFilter: 'will',
    Occupation: 'SR Desenvolvedor Full Stack',
    Attribuitions: [
      'Análise e arquitetura de soluções',
      'Desenvolvimento backend com NodeJs (Javascript / Typescript) e .NetCore (C#)',
      'Desenvolvimento Frontend com React',
      'Integrações AWS - Memcached, S3, SQS, Lambda',
      'Desenvolvimento em microsserviços ',
      'Banco de Dados Sql Server'
    ],
    Period: '16/05/2022 ~ Atualmente'
  },
  {
    CompanyNameFilter: 'vortx',
    Occupation: 'PL Desenvolvedor Full Stack',
    Attribuitions: [
      'Análise e arquitetura de soluções',
      'Desenvolvimento backend com NodeJs (Javascript / Typescript) e .NetCore (C#)',
      'Desenvolvimento Frontend com Razor ou React',
      'Integrações AWS - Memcached, S3, SQS, Lambda',
      'Desenvolvimento em microsserviços ',
      'Banco de Dados Sql Server'
    ],
    Period: '09/12/2020 ~ 05/05/2022'
  },
  {
    CompanyNameFilter: 'funcao',
    Occupation: 'PL Analista de Software',
    Attribuitions: [
      'Desenvolvimento backend .Net',
      'Desenvolvimento frontend Aspnet',
      'Banco de dados SQL Server',
      'Windows Server 2012',
    ],
    Period: '08/09/2020 ~ 30/11/2020'
  },
  {
    CompanyNameFilter: 'itau',
    Occupation: 'Jr Analista de Engenheria de TI',
    Attribuitions: [
      'Analise de Soluções',
      'Acompanhamento de projetos e2e',
      'Desenvolvimento em .Net Full Framework / .NetCore',
      'Desenvolvimento Frontend com Asp, HTML5, CSS3',
      'Implantações de Projetos',
      'Evolução de Plataforma',
    ],
    Period: '20/07/2017 ~ 01/09/2020'
  },
  {
    CompanyNameFilter: 'kcms',
    Occupation: 'Programador I',
    Attribuitions: [
      'Desenvolvimento backend .Net Core',
      'Desenvolvimento frontend Html5, CSS3, Bootstrap, Jquery',
      'Banco de dados Sql Server',
      'Cloud Azure'
    ],
    Period: '13/03/2017 ~ 17/07/2017'
  },
  {
    CompanyNameFilter: 'flex',
    Occupation: 'Jr Testador',
    Attribuitions: [
      'Testes de Segurança Elétrica',
      'Testes não funcionais',
      'Desenvolvimento .Net Windows Forms',
      'Banco de Dados Sql Server',
    ],
    Period: '20/05/2014 ~ 08/03/2017'
  },
]
