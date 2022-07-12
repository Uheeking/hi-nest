import { Module } from '@nestjs/common';
import { MoivesModule } from './moives/moives.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [MoivesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
