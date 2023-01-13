import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Disciplina,
  Aluno,
} from '../models';
import {DisciplinaRepository} from '../repositories';

export class DisciplinaAlunoController {
  constructor(
    @repository(DisciplinaRepository) protected disciplinaRepository: DisciplinaRepository,
  ) { }

  @get('/disciplinas/{id}/alunos', {
    responses: {
      '200': {
        description: 'Array of Disciplina has many Aluno',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aluno)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Aluno>,
  ): Promise<Aluno[]> {
    return this.disciplinaRepository.alunoDisc(id).find(filter);
  }

  @post('/disciplinas/{id}/alunos', {
    responses: {
      '200': {
        description: 'Disciplina model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aluno)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Disciplina.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aluno, {
            title: 'NewAlunoInDisciplina',
            exclude: ['id'],
            optional: ['disciplinaId']
          }),
        },
      },
    }) aluno: Omit<Aluno, 'id'>,
  ): Promise<Aluno> {
    return this.disciplinaRepository.alunoDisc(id).create(aluno);
  }

  @patch('/disciplinas/{id}/alunos', {
    responses: {
      '200': {
        description: 'Disciplina.Aluno PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aluno, {partial: true}),
        },
      },
    })
    aluno: Partial<Aluno>,
    @param.query.object('where', getWhereSchemaFor(Aluno)) where?: Where<Aluno>,
  ): Promise<Count> {
    return this.disciplinaRepository.alunoDisc(id).patch(aluno, where);
  }

  @del('/disciplinas/{id}/alunos', {
    responses: {
      '200': {
        description: 'Disciplina.Aluno DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Aluno)) where?: Where<Aluno>,
  ): Promise<Count> {
    return this.disciplinaRepository.alunoDisc(id).delete(where);
  }
}
