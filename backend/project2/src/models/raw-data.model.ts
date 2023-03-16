import {Entity, model, property} from '@loopback/repository';

@model()
export class RawData extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'array',
    itemType: 'boolean',
    required: true,
  })
  data: boolean[];


  constructor(data?: Partial<RawData>) {
    super(data);
  }
}

export interface RawDataRelations {
  // describe navigational properties here
}

export type RawDataWithRelations = RawData & RawDataRelations;
