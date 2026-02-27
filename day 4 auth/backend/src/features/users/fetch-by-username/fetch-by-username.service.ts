import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repo";

@Injectable()
export class FetchByUsernameService {
    constructor(private readonly userRepo: UserRepository) { }

    async fetchByUserName(username: string) {
        const users = await this.userRepo.findByUsername(username);
        return {
            users: users,
            message: "Got Something"
        }
    }
}