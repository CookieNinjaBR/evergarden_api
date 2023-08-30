import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SensorService } from './shared/sensor.service';
import { Sensor } from './schemas/sensor.schema';

@Controller('sensors')
export class SensorsController {
    constructor(
        private sensorService: SensorService
    ) {}

    @Get()
    async getAll(): Promise<Sensor[]> 
    {
        return this.sensorService.getAll();
    }

    @Post()
    async create(@Body() sensor:Sensor): Promise<Sensor> 
    {
        return this.sensorService.create(sensor);
    }

}
