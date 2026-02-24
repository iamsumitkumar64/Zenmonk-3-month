import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './features/Auth/register/register.module';
import { LoginModule } from './features/Auth/login/login.module';
import { AuthService } from './infrastructure/services/auth.service';
import { dataSource } from './infrastructure/database/data-source';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './infrastructure/repository/user.repo';
import { AuthenticateMiddleware } from './infrastructure/middleware/authenticate.middleware';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './infrastructure/google-strategy/google.strategy';
import { GoogleController } from './features/Auth/google/google.controller.';
import { BcryptService } from './infrastructure/services/bcrypt.service';
import { AllActiveUserModule } from './features/users/active-users-list/active-user.module';
import { AllActiveUserController } from './features/users/active-users-list/active-user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      ...dataSource.options,
      retryAttempts: 10,
      retryDelay: 5000
    }),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_REGISTER_SECRET,
      signOptions: { expiresIn: '60m' },
    }),

    PassportModule,

    //Modules
    RegisterModule,
    LoginModule,
    AllActiveUserModule,
  ],
  controllers: [AppController, GoogleController],
  providers: [AppService, AuthService, BcryptService, UserRepository, GoogleStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticateMiddleware)
      .forRoutes(AllActiveUserController)
  }
}
