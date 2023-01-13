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

  public readonly cursoDisc: HasManyRepositoryFactory<Disciplina, typeof Curso.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('DisciplinaRepository') protected disciplinaRepositoryGetter: Getter<DisciplinaRepository>,
  ) {
    super(Curso, dataSource);
    this.cursoDisc = this.createHasManyRepositoryFactoryFor('cursoDisc', disciplinaRepositoryGetter,);
    this.registerInclusionResolver('cursoDisc', this.cursoDisc.inclusionResolver);
  }
}
