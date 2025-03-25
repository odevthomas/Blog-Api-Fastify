import { isAuth } from '../middlewares/is.auth.js';
import jwt from 'jsonwebtoken';

const posts = [];

export async function PostRoutes(app) {
  // Rota de Login
  app.post('/login', (request, reply) => {
    const { username, password } = request.body;

    // Usuários simulados
    const users = [
      { username: 'usuario1', password: 'senha1' },
      { username: 'usuario2', password: 'senha2' },
    ];

    // Verifica se o usuário e a senha estão corretos
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
      return reply.status(401).send({ message: 'Credenciais inválidas' });
    }

    // Gera o token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return reply.status(200).send({ token });
  });

  // Listar Posts
  app.get('/posts', { onRequest: [isAuth] }, (request, reply) => {
    return reply.status(200).send(posts);
  });

  // Criar um Post
  app.post('/posts', { onRequest: [isAuth] }, (request, reply) => {
    const { username, title, content } = request.body;

    const post = {
      id: posts.length + 1,
      owner: username,
      title,
      content,
      date: new Date().toISOString(),
      comments: [],
      likes: []
    };

    posts.push(post);
    return reply.status(201).send(post);
  });

  // Comentar um Post
  app.post('/posts/:id/comment', { onRequest: [isAuth] }, (request, reply) => {
    const { id } = request.params;
    const { username, content } = request.body;

    const postIndex = posts.findIndex(post => post.id === +id);
  
    if (postIndex === -1) {
      return reply.status(404).send({ message: 'Post não encontrado' });
    }

    const comment = {
      id: posts[postIndex].comments.length + 1,
      owner: username,
      content,
      date: new Date().toISOString(),
    };

    posts[postIndex].comments.push(comment);
    return reply.status(201).send(comment);
  });

  // Dar Like em um Post
  app.post('/posts/:id/like', { onRequest: [isAuth] }, (request, reply) => {
    const { id } = request.params;
    const postIndex = posts.findIndex(post => post.id === +id);

    if (postIndex === -1) {
      return reply.status(404).send({ message: 'Post não encontrado' });
    }

    const userLikes = posts[postIndex].likes;
    const username = request.user.username;

    if (userLikes.includes(username)) {
      return reply.status(400).send({ message: 'Usuário já curtiu este post' });
    }

    posts[postIndex].likes.push(username);
    return reply.status(200).send({ message: 'Post curtido com sucesso' });
  });

  // Excluir um Post
  app.delete('/posts/:id', { onRequest: [isAuth] }, (request, reply) => {
    const { id } = request.params;
    const postIndex = posts.findIndex(post => post.id === +id);

    if (postIndex === -1) {
      return reply.status(404).send({ message: 'Post não encontrado' });
    }

    posts.splice(postIndex, 1);
    return reply.status(204).send(); // Sem conteúdo
  });
}