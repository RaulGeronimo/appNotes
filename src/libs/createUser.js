import User from '../models/User.js';

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: 'admin@gmail.com' });

  if (userFound) return;

  const newUser = new User({
    username: 'admin',
    email: 'admin@gmail.com',
  });

  newUser.password = await newUser.encryptPassword('admin');

  const admin = await newUser.save();

  console.log('El administrador ha sido creado', admin);
};
