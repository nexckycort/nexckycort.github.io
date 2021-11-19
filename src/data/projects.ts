interface Projects {
  title: string
  slug: string
  image: string
  category: string
  description: string
  tags: string[]
  sourceCode: string | null
  demoView: string | null
}

const projects: Projects[] = [
  {
    title: 'my portfolio',
    slug: 'my-portfolio',
    image: 'https://user-images.githubusercontent.com/50475272/142638193-83ea016a-e6e3-407c-bbab-916101949a7a.png',
    category: 'Web development',
    description:
      'This project is my personal website where I highlight my projects. It is built with the HTML, TypeScript, Sass technologies and packaged with Webpack.',
    tags: ['nodejs', 'typescript', 'webpack', 'scss', 'git hook', 'git flow', 'eslint', 'prettier'],
    sourceCode: 'https://github.com/nexckycort/nexckycort.github.io',
    demoView: null
  },
  {
    title: 'backend clean architecture nodejs',
    slug: 'backend-clean-architecture-nodejs',
    image: 'https://user-images.githubusercontent.com/50475272/137671622-13fa257b-eafe-40f5-a2c5-e2f1070015a8.jpg',
    category: 'Software Architecture',
    description:
      'This architecture is an extensive investigation, from my experience dealing with a poorly structured node.js project, bad patterns, and countless hours of code refactoring and moving things from one place to another.',
    tags: [
      'nodejs',
      'typescript',
      'patterns-design',
      'solid',
      'docker',
      'unit-test',
      'e2e-test',
      'webpack',
      'pipeline'
    ],
    sourceCode: 'https://github.com/nexckycort/backend-clean-architecture-nodejs',
    demoView: null
  },
  {
    title: 'registration and login template nodejs',
    slug: 'registration-and-login-template-nodejs',
    image: 'https://user-images.githubusercontent.com/50475272/142643185-ea0aaa7c-d1af-49e7-82bb-978482d0105c.png',
    category: 'Software Architecture',
    description:
      'In this project, I create a login. In addition, we also create a user CRUD with NODEJS and PostgreSQL, with sending mail to activate the account.',
    tags: ['nodejs', 'typescript', 'patterns-design', 'solid', 'unit-test', 'e2e-test', 'webpack', 'pipeline'],
    sourceCode: 'https://github.com/nexckycort/registration-and-login-template-nodejs',
    demoView: null
  },
  {
    title: 'rijndael nodejs',
    slug: 'rijndael-nodejs',
    image: 'https://user-images.githubusercontent.com/50475272/142638808-33818c5a-e71f-48e3-96b1-7bc592d9f744.png',
    category: 'Software Architecture',
    description: 'Implementation of the rijndael encryption algorithm.',
    tags: ['nodejs', 'typescript', 'patterns-design', 'solid', 'unit-test', 'webpack', 'cryptography'],
    sourceCode: 'https://github.com/nexckycort/rijndael-nodejs',
    demoView: 'https://www.npmjs.com/package/@nexckycort/rijndael-nodejs'
  },
  {
    title: 'my custom cra template',
    slug: 'cra-template',
    image: 'https://create-react-app.dev/img/logo.svg',
    category: 'Software Architecture',
    description: 'This is the template that i usually use when i work with React.',
    tags: ['nodejs', 'react', 'typescript', 'scss', 'webpack'],
    sourceCode: 'https://github.com/nexckycort/cra-template',
    demoView: 'https://www.npmjs.com/package/@nexckycort/cra-template'
  },
  {
    title: 'monolito react nodejs',
    slug: 'monolito-react-nodejs',
    image: 'https://user-images.githubusercontent.com/50475272/137674443-5f0fdc49-29ee-431f-9692-67c360dacc32.png',
    category: 'Software Architecture',
    description:
      'Implementation of web application with client server architecture with the functionality of merge both projects when compiling in order to deploy a monolithic app.',
    tags: [
      'nodejs',
      'react',
      'typescript',
      'patterns-design',
      'solid',
      'unit-test',
      'webpack',
      'monolith-architecture'
    ],
    sourceCode: 'https://github.com/nexckycort/monolito-react-nodejs',
    demoView: 'https://monolito-react-nodejs.herokuapp.com'
  },
  {
    title: 'frontend clean architecture reactjs',
    slug: 'frontend-clean-architecture-reactjs',
    image: 'https://user-images.githubusercontent.com/50475272/137676002-1e2f8214-c3a4-470b-84bf-2e866f16fd26.png',
    category: 'Software Architecture',
    description: 'This is a project of a clean frontend architecture.',
    tags: ['react', 'typescript', 'patterns-design', 'solid'],
    sourceCode: 'https://github.com/nexckycort/frontend-clean-architecture-reactjs',
    demoView: null
  },
  {
    title: 'keycloak demo react',
    slug: 'keycloak-demo-react',
    image: 'https://user-images.githubusercontent.com/50475272/137674242-ea6f2de6-3c9d-477a-86ca-039ab35a00c4.png',
    category: 'Single Sign-On',
    description: 'Demo for React and Keycloak SSO integration.',
    tags: ['react', 'typescript', 'keycloak'],
    sourceCode: 'https://github.com/nexckycort/keycloak-demo-react',
    demoView: null
  }
]

export default projects
