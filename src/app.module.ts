import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';
import { CoursesController } from './courses/controllers/courses.controller';
import { LessonsController } from './courses/controllers/lessons.controller';
import { CoursesModule } from './courses/courses.module';
import { GetUserMiddleware } from './middleware/get-user.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://user1:123@127.0.0.1:27017/nestjs-course'),
    CatsModule,
    CoursesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(GetUserMiddleware)
      .forRoutes(CoursesController, LessonsController);
  }
}
