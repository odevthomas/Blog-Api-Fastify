import fastify from 'fastify';
import dotenv from 'dotenv'; // Adicione esta linha
import { PostRoutes } from './routes/posts.js';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
    }
  }
});

app.register(PostRoutes);

app.listen(
  {
    host: '0.0.0.0',
    port: 4000
  },
  () => {
    console.log('Server tá rodando OK');
  }
);