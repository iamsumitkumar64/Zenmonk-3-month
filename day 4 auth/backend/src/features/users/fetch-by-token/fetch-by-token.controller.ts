import { Controller, Get, Req } from "@nestjs/common";
import { FetchByTokenService } from "./fetch-by-token.service";
import type { Request } from "express";

@Controller('/fetch_by_token')
export class FetchByTokenController {
    constructor(private readonly fetchbyTokenService: FetchByTokenService) { }

    @Get()
    async fetchBytoken(@Req() req: Request) {
        return req.user;
    }
}