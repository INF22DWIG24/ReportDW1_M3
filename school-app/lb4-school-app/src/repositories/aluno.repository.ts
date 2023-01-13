import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Aluno, AlunoRelations} from '../models';

export class AlunoRepository extends DefaultCrudRepository<
  Aluno,
  typeof Aluno.prototype.id,
  AlunoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Aluno, dataSource);
  }
}
