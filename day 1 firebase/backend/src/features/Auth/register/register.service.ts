import { UserRepository } from "src/infrastructure/repository/user.repo";
import { RegisterDto } from "./register.dto";
import { Injectable } from "@nestjs/common";
import { AuthService } from "src/infrastructure/Auth/auth.service";

@Injectable()
export class RegisterService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly authService: AuthService
    ) { }

    async registerUser(body: RegisterDto) {
        //check if already exists using this email
        const isUserExists = await this.userRepo.findByEmail(body.email);
        if (isUserExists.length) {
            return "User Already Exists with this Email"
        }

        //register user in DB
        await this.userRepo.register(body);
        return "Registered User"
    }
}