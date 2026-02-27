import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    @MinLength(8)
    password: string;
}