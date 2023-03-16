import {DefaultCrudRepository} from '@loopback/repository';
import {RawData, RawDataRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RawDataRepository extends DefaultCrudRepository<
  RawData,
  typeof RawData.prototype.id,
  RawDataRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(RawData, dataSource);
  }
}
