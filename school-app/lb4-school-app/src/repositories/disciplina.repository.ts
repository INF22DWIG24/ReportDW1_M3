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

  public readonly cursodisc: BelongsToAccessor<Curso, typeof Disciplina.prototype.id>;

  public readonly profdisc: BelongsToAccessor<Professor, typeof Disciplina.prototype.id>;

  public readonly alunosdisc: HasManyRepositoryFactory<Aluno, typeof Disciplina.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CursoRepository') protected cursoRepositoryGetter: Getter<CursoRepository>, @repository.getter('ProfessorRepository') protected professorRepositoryGetter: Getter<ProfessorRepository>, @repository.getter('AlunoRepository') protected alunoRepositoryGetter: Getter<AlunoRepository>,
  ) {
    super(Disciplina, dataSource);
    this.alunosdisc = this.createHasManyRepositoryFactoryFor('alunosdisc', alunoRepositoryGetter,);
    this.registerInclusionResolver('alunosdisc', this.alunosdisc.inclusionResolver);
    this.profdisc = this.createBelongsToAccessorFor('profdisc', professorRepositoryGetter,);
    this.registerInclusionResolver('profdisc', this.profdisc.inclusionResolver);
    this.cursodisc = this.createBelongsToAccessorFor('cursodisc', cursoRepositoryGetter,);
    this.registerInclusionResolver('cursodisc', this.cursodisc.inclusionResolver);
  }
}
