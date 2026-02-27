import { Module } from "@nestjs/common";
import { AllActiveuserService } from "./active-user.service";
import { AllActiveUserController } from "./active-user.controller";
import { UserRepository } from "src/infrastructure/repository/user.repo";

@Module({
    imports: [],
    controllers: [AllActiveUserController],
    providers: [AllActiveuserService, UserRepository],
    exports: [],
})

export class AllActiveUserModule { };