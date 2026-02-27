import { Module } from "@nestjs/common";
import { FetchByTokenController } from "./fetch-by-token.controller";
import { FetchByTokenService } from "./fetch-by-token.service";

@Module({
    imports: [],
    controllers: [FetchByTokenController],
    providers: [FetchByTokenService],
    exports: [],
})

export class FetchByTokenModule { };