import jwt from 'jsonwebtoken';

export function isAuth(request, reply) {
  const authHeader = request.headers['authorization'];
  if (!authHeader) {
    return reply.status(401).send({ message: 'Unauthorized' });
  }

  const token = authHeader.replace('Bearer ', '').trim();
  if (!token) {
    return reply.status(401).send({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;
  } catch (error) {
    return reply.status(401).send({ message: 'Unauthorized' });
  }
}