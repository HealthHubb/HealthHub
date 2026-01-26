import { AppError } from '../../errors/AppError';
import { Diet } from '../../models/Diet';
import { Plan } from '../../models/Plan';
import { User } from '../../models/User';
import { Workout } from '../../models/Workout';

export const ShowUserService = async (id: string | number): Promise<User> => {
  const user = await User.findOne({
    where: { id: id },
    include: [
      {
        model: Plan,
        as: 'plans',
        include: [
          {
            model: Workout,
            as: 'workouts',
          },
          {
            model: Diet,
            as: 'diets',
          },
        ],
      },
    ],
    attributes: { exclude: ['passwordHash'] },
  });

  if (!user) {
    throw new AppError('Usuário não encontrado');
  }

  return user;
};
