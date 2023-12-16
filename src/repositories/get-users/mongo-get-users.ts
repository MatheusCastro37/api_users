import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "matheus",
        lastName: "castro",
        email: "matheus@gmail.com",
        password: "123",
      },
    ];
  }
}
