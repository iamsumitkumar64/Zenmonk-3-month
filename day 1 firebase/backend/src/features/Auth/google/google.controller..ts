import { Controller, Get, HttpStatus, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class GoogleController {
    constructor() { }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) { }

    @Get('redirect')
    @Redirect('https://docs.nestjs.com', HttpStatus.PERMANENT_REDIRECT)
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        console.log(req.user);
    }
}