import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sensor } from '../schemas/sensor.schema';

@Injectable()
export class SensorService {
    constructor(@InjectModel('Sensor') private readonly sensorModel: Model<Sensor>) { }
    async getAll() {
        return await this.sensorModel.find().exec();
    }

    async create(sensor: Sensor) {
        const createdSensor = new this.sensorModel(sensor);
        return await createdSensor.save();
    }
    
}
