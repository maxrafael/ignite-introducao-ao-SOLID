import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const searchUser = this.usersRepository.findById(user_id);

    if (!searchUser) {
      throw new Error("User not found!");
    }

    searchUser.admin = true;

    return searchUser;
  }
}

export { TurnUserAdminUseCase };
