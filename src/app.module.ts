import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorsModule } from './sensors/sensors.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  
  imports: [
    MongooseModule.forRoot('mongodb+srv://migueltbmagalhaes:123@cluster0.8lmuwqa.mongodb.net/?retryWrites=true&w=majority'),
    SensorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
