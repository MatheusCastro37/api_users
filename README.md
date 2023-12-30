# API Users

> Este Projeto é uma API REST de usuarios de um banco de dados MongoDB.

Este Projeto foi desenvolvido seguindo o video: [Crie e Faça Deploy de uma API COMPLETA com Node, TypeScript & MongoDB](https://www.youtube.com/watch?v=gU3kp7Aw0JI&t=1s)<br>
Video feito pelo desenvolvedor: [Felipe Rocha](https://github.com/felipemotarocha)

Esta API foi construida para fazer CRUD de usuarios do banco de dados. E este projeto foi construido com base em alguns conceitos de programação como princípios do SOLID e Repository Pattern.

Tecnologias usadas:
[NodeJS](https://nodejs.org/en),
[Fastify](https://fastify.dev/),
[TypeScript](https://www.typescriptlang.org/pt/) e
[MongoDB](https://www.mongodb.com/pt-br)

## Exemplos de usos

Métodos GET:

Retorna todos os usuarios do banco de dados.
![](https://raw.githubusercontent.com/MatheusCastro37/api_users/main/preview/getUsers.png)

Retorna um usuario especifico atraves do id da url.
![](https://raw.githubusercontent.com/MatheusCastro37/api_users/main/preview/getUsersById.png)

Método POST: Adiciona um novo usuario no banco de dados.
![](https://raw.githubusercontent.com/MatheusCastro37/api_users/main/preview/postUser.png)

Método PATCH: Atualiza de um a tres campos de um usuario no banco de dados especificando o id pela url.
![](https://raw.githubusercontent.com/MatheusCastro37/api_users/main/preview/patchUser.png)

Método DELETE: Deleta um usuario do banco de dados especificando o id pela url.
![](https://raw.githubusercontent.com/MatheusCastro37/api_users/main/preview/deleteUser.png)
