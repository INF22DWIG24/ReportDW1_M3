import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Disciplina,
  Curso,
} from '../models';
import {DisciplinaRepository} from '../repositories';

export class DisciplinaCursoController {
  constructor(
    @repository(DisciplinaRepository)
    public disciplinaRepository: DisciplinaRepository,
  ) { }

  @get('/disciplinas/{id}/curso', {
    responses: {
      '200': {
        description: 'Curso belonging to Disciplina',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Curso)},
          },
        },
      },
    },
  })
  async getCurso(
    @param.path.number('id') id: typeof Disciplina.prototype.id,
  ): Promise<Curso> {
    return this.disciplinaRepository.cursoDisc(id);
  }
}
