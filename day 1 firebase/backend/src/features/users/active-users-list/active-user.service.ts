import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repo";

@Injectable()
export class AllActiveuserService {
    constructor(private readonly userRepo: UserRepository) { }

    async fetchingAllUsers() {
        const users = await this.userRepo.fetchingAllUsers();
        return {
            users: users,
            message: "All active users fetched"
        }
    }
}