import { Controller, Get, Param } from "@nestjs/common";
import { FetchByUsernameService } from "./fetch-by-username.service";

@Controller('/fetch_by_username')
export class FetchByUsernameController {
    constructor(private readonly fetchbyUsernameService: FetchByUsernameService) { }

    @Get(':username')
    async fetchByUserName(@Param() params: any) {
        return await this.fetchbyUsernameService.fetchByUserName(params.username);
    }
}