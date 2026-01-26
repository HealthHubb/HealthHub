import { AppError } from '../../errors/AppError';
import { User } from '../../models/User';
import bcrypt from 'bcrypt';

interface Request {
  name: string;
  email: string;
  password: string;
}

export const CreateUserService = async ({
  name,
  email,
  password,
}: Request): Promise<User> => {
  const userExists = await User.findOne({
    where: { email: email },
  });

  if (userExists) {
    throw new AppError('Email já está em uso.');
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = await User.create({
    name,
    email,
    passwordHash,
  });

  return user;
};
