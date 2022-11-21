# BankApp with React and Node

desenvolvido por [Armando Neto](https://github.com/ArNeto19)

#### Projeto fullstack desenvolvido com TypeScript, aplicando conhecimentos moldados através de cursos e desenvolvimento de projetos anteriores.

### Tecnologias
- Typescript
- React
- Node
- PostegreSQL
- TypeORM
- Docker

### Tecnologias necessárias para rodar o projeto
- Node.js
- Docker Desktop

### Como rodar o projeto

1 - Clone o repositório;

2 - Crie um arquivo .env baseado no .env.example localizado no diretório /server. É sugerido manter as mesmas informações;

3 - Instale as dependeências: rode o comando abaixo em ambos os diretórios /frontend e /server;
    
    npm install

4 - Execute o projeto através dos seguintes scripts, em ordem:
    
    npm run docker:up
    npm run migration:create
    npm run migration:run
    navegar até: http://localhost:3000

5 - Caso deseje fazer alterações e buildar via Docker sem levantar toda a aplicação novamente:

    npm run docker:build [frontend/server] **trocar nome do diretório de acordo com onde foram feitas as mudanças de código.