import { User } from "../../models/user";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IGetUserIdRepository } from "./protocols";

export class GetUserIdController implements IController {
  constructor(private readonly getUserIdRepository: IGetUserIdRepository) {}

  async handle(
    httpRequest: HttpRequest<unknown>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest("Esta faltando o id do usuario.");
      }

      const user = await this.getUserIdRepository.getUser(id);

      return ok<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
