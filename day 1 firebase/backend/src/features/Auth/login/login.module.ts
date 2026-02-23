import { Module } from "@nestjs/common";
import { LoginService } from "./login.service";
import { UserRepository } from "src/infrastructure/repository/user.repo";
import { LoginController } from "./login.controller";
import { AuthService } from "src/infrastructure/Auth/auth.service";

@Module({
    imports: [],
    controllers: [LoginController],
    providers: [LoginService, UserRepository, AuthService],
    exports: [LoginModule],
})

export class LoginModule { }