import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
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
import { BcryptService } from './infrastructure/services/bcrypt.service';
import { AllActiveUserModule } from './features/users/active-users-list/active-user.module';
import { AllActiveUserController } from './features/users/active-users-list/active-user.controller';
import { DeactivateUserModule } from './features/users/deactivate user/deactive.user.module';
import { FetchByUsernameModule } from './features/users/fetch-by-username/fetch-by-username.module';
import { FetchByTokenModule } from './features/users/fetch-by-token/fetch-by-token.module';

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

    //Modules
    RegisterModule,
    LoginModule,
    AllActiveUserModule,
    DeactivateUserModule,
    FetchByUsernameModule,
    FetchByTokenModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, BcryptService, UserRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticateMiddleware)
      .exclude(
        { path: 'login', method: RequestMethod.ALL },
        { path: 'register', method: RequestMethod.ALL },
        { path: 'fetch_by_username/*path', method: RequestMethod.ALL },
      )
      .forRoutes('*');
  }
}
