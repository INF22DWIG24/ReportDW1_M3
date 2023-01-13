import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Curso, CursoRelations, Disciplina} from '../models';
import {DisciplinaRepository} from './disciplina.repository';

export class CursoRepository extends DefaultCrudRepository<
  Curso,
  typeof Curso.prototype.id,
  CursoRelations
> {

  public readonly cursodisc: HasManyRepositoryFactory<Disciplina, typeof Curso.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('DisciplinaRepository') protected disciplinaRepositoryGetter: Getter<DisciplinaRepository>,
  ) {
    super(Curso, dataSource);
    this.cursodisc = this.createHasManyRepositoryFactoryFor('cursodisc', disciplinaRepositoryGetter,);
    this.registerInclusionResolver('cursodisc', this.cursodisc.inclusionResolver);
  }
}
