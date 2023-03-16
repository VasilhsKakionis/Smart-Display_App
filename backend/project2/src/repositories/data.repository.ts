import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Data, DataRelations} from '../models';

export class DataRepository extends DefaultCrudRepository<
  Data,
  typeof Data.prototype.id,
  DataRelations
  > {
  static create(rawData: import("../models").RawData): void | PromiseLike<void> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Data, dataSource);
  }
}
