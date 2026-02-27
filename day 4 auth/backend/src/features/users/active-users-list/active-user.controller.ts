import { Controller, Get } from "@nestjs/common";
import { AllActiveuserService } from "./active-user.service";

@Controller('/all_active_users')
export class AllActiveUserController {
    constructor(private readonly allActiveUserService: AllActiveuserService) { }

    @Get()
    async fetchallActiveUser() {
        return await this.allActiveUserService.fetchingAllUsers();
    }
}