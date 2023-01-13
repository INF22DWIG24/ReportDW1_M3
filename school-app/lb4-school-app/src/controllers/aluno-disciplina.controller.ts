import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Aluno,
  Disciplina,
} from '../models';
import {AlunoRepository} from '../repositories';

export class AlunoDisciplinaController {
  constructor(
    @repository(AlunoRepository)
    public alunoRepository: AlunoRepository,
  ) { }

  @get('/alunos/{id}/disciplina', {
    responses: {
      '200': {
        description: 'Disciplina belonging to Aluno',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Disciplina)},
          },
        },
      },
    },
  })
  async getDisciplina(
    @param.path.number('id') id: typeof Aluno.prototype.id,
  ): Promise<Disciplina> {
    return this.alunoRepository.alunoDisc(id);
  }
}
