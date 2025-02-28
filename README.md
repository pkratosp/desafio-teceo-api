## Sobre o projeto

Projeto feito para o desafio da startup teceo, neste projeto utilizei nestjs para desenvolver uma pequena api

## Iniciar a aplicação

Para inciar a aplicação é necessário possuir o docker instalado, caso já possua o docker execute os comandos abaixo.

Neste projeto utlizei docker engine na versão 27.5.1, porem o docker desktop para a finalidade do projeto também ira rodar o projeto.

Foi utlizado também o nodejs na versão lts 20.18.1 a mesma do projeto do front end.

Para instalar as dependencias do projeto rode o comando abaixo

```sh
npm install
```

Para iniciar o projeto, há três formas: rodar os comandos manualmente um a um ou executá-los por ambiente.

Obs: Foi divido em 2 comandos de ambiente pois quando o docker executa o container leva alguns segundos para ser possível uma conexão com o prisma e neste caso iria sempre falhar a primeira execução

# Para ambiente em distribuição linux

```sh
npm run start:dev
```

# Para ambiente windows

```sh
npm run start:dev:w
```

# Para executar tudo manualmente

Rode os camandos abaixo na sequência

Vai rodar o docker compose para o banco de dados

```sh
npm run service:up
```

Ira rodar as migrations do projeto e aplicalas no banco de dados

```sh
npm run prisma:migrate
```

Ira aplicar dados ficticios no banco de dados com a finalizade para testar o front-end

```sh
npm run prisma:seed
```

Ira executar o projeto

```sh
npm run dev
```
