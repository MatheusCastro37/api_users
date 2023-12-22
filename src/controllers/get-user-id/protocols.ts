import { User } from "../../models/user";

export interface IGetUserIdRepository {
  getUser(id: string): Promise<User>;
}
