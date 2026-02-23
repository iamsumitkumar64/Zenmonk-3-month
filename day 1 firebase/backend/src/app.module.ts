import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './features/Auth/register/register.module';
import { LoginModule } from './features/Auth/login/login.module';
import { AuthService } from './infrastructure/Auth/auth.service';
import { dataSource } from './infrastructure/database/data-source';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './infrastructure/repository/user.repo';
import { AuthenticateMiddleware } from './infrastructure/middleware/authenticate.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options,
      retryAttempts: 10,
      retryDelay: 5000
    }),

    JwtModule.register({
      global: true,
      secret: "sumit123",
      signOptions: { expiresIn: '60m' },
    }),

    //Modules
    RegisterModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, UserRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticateMiddleware)
  }
}
