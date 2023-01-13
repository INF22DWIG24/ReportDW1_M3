import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Professor, ProfessorRelations, Disciplina} from '../models';
import {DisciplinaRepository} from './disciplina.repository';

export class ProfessorRepository extends DefaultCrudRepository<
  Professor,
  typeof Professor.prototype.id,
  ProfessorRelations
> {

  public readonly profdisc: HasManyRepositoryFactory<Disciplina, typeof Professor.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('DisciplinaRepository') protected disciplinaRepositoryGetter: Getter<DisciplinaRepository>,
  ) {
    super(Professor, dataSource);
    this.profdisc = this.createHasManyRepositoryFactoryFor('profdisc', disciplinaRepositoryGetter,);
    this.registerInclusionResolver('profdisc', this.profdisc.inclusionResolver);
  }
}
