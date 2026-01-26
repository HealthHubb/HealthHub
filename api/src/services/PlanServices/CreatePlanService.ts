import { AppError } from '../../errors/AppError';
import { Plan } from '../../models/Plan';
import { User } from '../../models/User';

interface Request {
  duration: number;
  userId: string | number;
}

export const CreatePlanService = async ({
  duration,
  userId,
}: Request): Promise<Plan> => {
  const user = await User.findByPk(userId);

  if (!user) {
    throw new AppError('Usuário não encontrado');
  }

  const plan = await Plan.create({
    duration,
    userId: user.id,
  });

  return plan;
};
