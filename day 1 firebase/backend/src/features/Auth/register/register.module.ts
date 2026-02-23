import { Module } from "@nestjs/common";
import { RegisterService } from "./register.service";
import { RegisterController } from "./register.controller";
import { UserRepository } from "src/infrastructure/repository/user.repo";
import { AuthService } from "src/infrastructure/Auth/auth.service";

@Module({
    imports: [],
    controllers: [RegisterController],
    providers: [RegisterService, UserRepository, AuthService],
    exports: [RegisterModule],
})

export class RegisterModule { }