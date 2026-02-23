import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Module({
    imports: [],
    providers: [AuthService],
    controllers: [],
    exports: [AuthModule],
})

export class AuthModule { }