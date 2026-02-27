import { Module } from "@nestjs/common";
import { FetchByUsernameService } from "./fetch-by-username.service";
import { FetchByUsernameController } from "./fetch-by-username.controller";
import { UserRepository } from "src/infrastructure/repository/user.repo";

@Module({
    imports: [],
    controllers: [FetchByUsernameController],
    providers: [FetchByUsernameService, UserRepository],
    exports: [],
})

export class FetchByUsernameModule { };