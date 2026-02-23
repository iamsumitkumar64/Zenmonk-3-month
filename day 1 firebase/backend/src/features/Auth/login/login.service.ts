import { UserRepository } from "src/infrastructure/repository/user.repo";
import { LoginDto } from "./login.dto";
import { AuthService } from "src/infrastructure/Auth/auth.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly authService: AuthService,
    ) { }

    async loginUser(body: LoginDto) {
        //check if already exists using this email
        const isUserExists = await this.userRepo.findByEmail(body.email);
        if (!isUserExists) {
            return "User not Exists with this Email"
        }

        const token = await this.authService.generateJwtToken(isUserExists[0]);

        return {
            access_token: token,
            message: "Login Success"
        }
    }
}