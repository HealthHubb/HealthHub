import { AppError } from '../../errors/AppError';
import { User } from '../../models/User';
import bcrypt from 'bcrypt';

interface UserData {
  name?: string;
  email?: string;
  password?: string;
  goal?: string;
  days_per_week?: number;
  session_duration?: number;
  health_conditions?: string;
  dietary_restrictions?: string;
  daily_activity_level?: 'sedentary' | 'light' | 'moderate' | 'active';
  fitnessLevel?: 'beginner' | 'intermediate' | 'advanced';
  current_weight?: number;
  target_weight?: number;
  lang?: 'en' | 'es' | 'tr';
  imc?: { value: number; category: string };
  age?: number;
  height?: number;
  gender?: 'male' | 'female' | 'other';
  bmr?: number;
}


interface Request {
  id: string | number;
  userData: UserData;
}

export const UpdateUserService = async ({
  id,
  userData,
}: Request): Promise<User> => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new AppError('Usuário não encontrado');
  }

  let {
    name,
    email,
    password,
    goal,
    days_per_week,
    session_duration,
    health_conditions,
    dietary_restrictions,
    daily_activity_level,
    fitnessLevel,
    current_weight,
    target_weight,
    lang,
    imc,
    age,
    height,
    gender,
    bmr,
  } = userData;

  if (email && email !== user.email) {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      throw new AppError('Email já está em uso');
    }
  }

  if (password) {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    password = passwordHash;
  }

  if (height && current_weight) {
    const value = parseFloat((current_weight / ((height / 100) * (height / 100))).toFixed(2));
    imc = { value, category: null };

    switch (true) {
      case value < 18.5:
        imc.category = 'Underweight';
        break;

      case value >= 18.5 && value < 24.9:
        imc.category = 'Normal weight';
        break;

      case value >= 25 && value < 29.9:
        imc.category = 'Overweight';
        break;

      case value >= 30:
        imc.category = 'Obesity';
        break;

      case value >= 40:
        imc.category = 'Severe Obesity';
        break;
    }
  }

  if (current_weight && height && age && gender) {
    if (gender === 'male') {
      bmr = parseFloat((66.5 + (13.75 * current_weight) + (5.003 * height) - (6.75 * age)).toFixed(2));
    } else {
      bmr = parseFloat((655.1 + (9.563 * current_weight) + (1.85 * height) - (4.676 * age)).toFixed(2));
    }
  }

  const updatedUser = await user.update({
    ...userData,
    password,
    imc,
    bmr,
  });

  return updatedUser;
};
