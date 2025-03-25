# 📝 API para Blog com Fastify  

<p align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/server.svg" alt="API Blog" width="100" height="100"/>
</p>

<p align="center">
  <strong>Uma API RESTful para um blog, onde usuários podem criar posts, comentar e curtir.</strong>
</p>

<p align="center">
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#como-usar">Como Usar</a> •
  <a href="#estrutura">Estrutura</a> •
  <a href="#licenca">Licença</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Fastify-5.2.1-blue?logo=fastify" alt="Fastify"/>
  <img src="https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-success" alt="Version"/>
</p>

---

## ⚙️ Funcionalidades  

- 📌 **Listar Posts**: Qualquer usuário pode visualizar as postagens.  
- 📝 **Criar Post**: Usuário pode criar um post informando **nome** e **título**.  
- 💬 **Comentar Post**: Usuário pode comentar em um post informando **nome** e **conteúdo do comentário**.  
- 👍 **Dar Like no Post**: Usuário pode curtir um post.  
- ❌ **Excluir Post**: Usuário pode deletar um post.  

---

## 🚀 Tecnologias  

Este projeto utiliza as seguintes tecnologias:  

- [Fastify](https://www.fastify.io/) - Framework web para Node.js.  
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional.  
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken) - Autenticação baseada em token.  
- [Dotenv](https://github.com/motdotla/dotenv) - Gerenciamento de variáveis de ambiente.  
- [Pino Pretty](https://github.com/pinojs/pino-pretty) - Logger para Fastify.  
- [Request](https://github.com/request/request) - Realizar requisições HTTP.  

---

## 🛠️ Como Usar  

### 1️⃣ Clonar o repositório  

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2️⃣ Criar e configurar o arquivo `.env`  

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:  

```env
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=blogdb
DB_HOST=localhost
PORT=3000
JWT_SECRET=seuSegredoSuperSecreto
```

### 3️⃣ Instalar as dependências  

```bash
npm install
```

### 4️⃣ Iniciar o servidor  

```bash
npm start
```

A API estará disponível em **http://localhost:3000**.  

---

## 📂 Estrutura  

```
/src
  /controllers
    postController.js
    commentController.js
  /models
    Post.js
    Comment.js
    index.js
  /routes
    postRoutes.js
    commentRoutes.js
  /config
    database.js
server.js
Dockerfile
docker-compose.yml
package.json
.env
```

---

## 📝 Licença  

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.  

---

<p align="center">
  Desenvolvido por <strong> odevthomas | Thomas   </strong> 🚀
</p>


