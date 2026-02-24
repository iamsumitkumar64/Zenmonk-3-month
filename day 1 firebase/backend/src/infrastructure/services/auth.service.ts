import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "src/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async generateJwtToken(userObj: UserEntity) {
        console.log(userObj);
        const payload = {
            sub: userObj.uuid,
            email: userObj.email,
            username: userObj.username,
        };

        return await this.jwtService.signAsync(payload);
    }

    async verifyJwtToken(token: string) {
        return await this.jwtService.verifyAsync(token);
    }
}