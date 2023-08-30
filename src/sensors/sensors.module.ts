import { Module } from '@nestjs/common';
import { SensorsController } from './sensors.controller';
import { SensorService } from './shared/sensor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorSchema } from './schemas/sensor.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Sensor', schema: SensorSchema }
        ])
    ],
    controllers: [SensorsController],
    providers: [SensorService]
})
export class SensorsModule {}
