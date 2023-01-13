import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Aluno, AlunoRelations, Disciplina} from '../models';
import {DisciplinaRepository} from './disciplina.repository';

export class AlunoRepository extends DefaultCrudRepository<
  Aluno,
  typeof Aluno.prototype.id,
  AlunoRelations
> {

  public readonly alunodisc: BelongsToAccessor<Disciplina, typeof Aluno.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('DisciplinaRepository') protected disciplinaRepositoryGetter: Getter<DisciplinaRepository>,
  ) {
    super(Aluno, dataSource);
    this.alunodisc = this.createBelongsToAccessorFor('alunodisc', disciplinaRepositoryGetter,);
    this.registerInclusionResolver('alunodisc', this.alunodisc.inclusionResolver);
  }
}
