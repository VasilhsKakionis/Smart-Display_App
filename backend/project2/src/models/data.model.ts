import {Entity, model, property} from '@loopback/repository';

@model()
export class Data extends Entity {
  static find(arg0: string) {
    throw new Error('Method not implemented.');
  }
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  bar1: number;

  @property({
    type: 'number',
    required: true,
  })
  bar2: number;

  @property({
    type: 'number',
    required: true,
  })
  bar3: number;

  @property({
    type: 'number',
    required: true,
  })
  bar4: number;

  @property({
    type: 'boolean',
    required: true,
  })
  upperIND1: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  upperIND2: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  upperIND3: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  upperIND4: boolean;

  @property({
    type: 'number',
    required: true,
  })
  hours: number;

  @property({
    type: 'boolean',
    required: true,
  })
  timer: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND11: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND12: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND13: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND14: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND21: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND22: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND23: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND24: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND31: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND32: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND33: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND34: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND41: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND42: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND43: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  lowIND44: boolean;

  @property({
    type: 'date',
    required: true,
  })
  timestamp: string;

  @property({
    type: 'boolean',
    required: true,
  })
  flagIsOk: boolean;



  constructor(data?: Partial<Data>) {
    super(data);
  }
}

export interface DataRelations {
  // describe navigational properties here
}

export type DataWithRelations = Data & DataRelations;
