import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const searchUser = this.usersRepository.findById(user_id);

    if (!searchUser) {
      throw new Error("User does not exists!");
    }

    if (!searchUser.admin) {
      throw new Error("User is not an admin!");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
