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
  Professor,
} from '../models';
import {DisciplinaRepository} from '../repositories';

export class DisciplinaProfessorController {
  constructor(
    @repository(DisciplinaRepository)
    public disciplinaRepository: DisciplinaRepository,
  ) { }

  @get('/disciplinas/{id}/professor', {
    responses: {
      '200': {
        description: 'Professor belonging to Disciplina',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Professor)},
          },
        },
      },
    },
  })
  async getProfessor(
    @param.path.number('id') id: typeof Disciplina.prototype.id,
  ): Promise<Professor> {
    return this.disciplinaRepository.profDisc(id);
  }
}
