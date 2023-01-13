import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Disciplina, DisciplinaRelations, Curso, Professor, Aluno} from '../models';
import {CursoRepository} from './curso.repository';
import {ProfessorRepository} from './professor.repository';
import {AlunoRepository} from './aluno.repository';

export class DisciplinaRepository extends DefaultCrudRepository<
  Disciplina,
  typeof Disciplina.prototype.id,
  DisciplinaRelations
> {

  public readonly cursoDisc: BelongsToAccessor<Curso, typeof Disciplina.prototype.id>;

  public readonly profDisc: BelongsToAccessor<Professor, typeof Disciplina.prototype.id>;

  public readonly alunoDisc: HasManyRepositoryFactory<Aluno, typeof Disciplina.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CursoRepository') protected cursoRepositoryGetter: Getter<CursoRepository>, @repository.getter('ProfessorRepository') protected professorRepositoryGetter: Getter<ProfessorRepository>, @repository.getter('AlunoRepository') protected alunoRepositoryGetter: Getter<AlunoRepository>,
  ) {
    super(Disciplina, dataSource);
    this.alunoDisc = this.createHasManyRepositoryFactoryFor('alunoDisc', alunoRepositoryGetter,);
    this.registerInclusionResolver('alunoDisc', this.alunoDisc.inclusionResolver);
    this.profDisc = this.createBelongsToAccessorFor('profDisc', professorRepositoryGetter,);
    this.registerInclusionResolver('profDisc', this.profDisc.inclusionResolver);
    this.cursoDisc = this.createBelongsToAccessorFor('cursoDisc', cursoRepositoryGetter,);
    this.registerInclusionResolver('cursoDisc', this.cursoDisc.inclusionResolver);
  }
}
