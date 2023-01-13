import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Disciplina, DisciplinaRelations} from '../models';

export class DisciplinaRepository extends DefaultCrudRepository<
  Disciplina,
  typeof Disciplina.prototype.id,
  DisciplinaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Disciplina, dataSource);
  }
}
