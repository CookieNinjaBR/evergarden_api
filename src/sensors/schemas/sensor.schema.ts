import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SensorDocument = HydratedDocument<Sensor>;

@Schema()
export class Sensor {
  @Prop()
  planta_id: string;

  @Prop()
  sensor_id: string;

  @Prop()
  data: number;

  @Prop()
  medida: string;
}

export const SensorSchema = SchemaFactory.createForClass(Sensor);