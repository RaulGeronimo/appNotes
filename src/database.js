import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

try {
  const db = await mongoose.connect(MONGODB_URI);
  console.log('Conexion exitosa con:', db.connection.name);
} catch (error) {
  console.error(error);
}

mongoose.connection.on('Conectado', () => {
  console.log('Mongoose esta Conectado');
});

mongoose.connection.on('Desconectado', () => {
  console.log('Mongoose esta desconectado');
});

