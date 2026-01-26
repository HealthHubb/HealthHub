import { Request, Response } from 'express';
import { CreateUserService } from '../services/UserServices/CreateUserService';
import { ShowUserService } from '../services/UserServices/ShowUserService';
import { UpdateUserService } from '../services/UserServices/UpdateUserService';
import { DeleteUserService } from '../services/UserServices/DeleteUserService';

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password } = req.body;

  const user = await CreateUserService({ name, email, password });

  return res.status(201).json(user);
};

export const show = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;

  const user = await ShowUserService(id);

  return res.status(200).json(user);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  const userData = req.body;

  const updatedUser = await UpdateUserService({ id, userData });

  return res.status(200).json(updatedUser);
};

export const destroy = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;

  await DeleteUserService(id);

  return res.status(204).json({
    message: 'Usuário deletado com sucesso',
  })
}
