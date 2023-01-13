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
  Professor,
  Disciplina,
} from '../models';
import {ProfessorRepository} from '../repositories';

export class ProfessorDisciplinaController {
  constructor(
    @repository(ProfessorRepository) protected professorRepository: ProfessorRepository,
  ) { }

  @get('/professors/{id}/disciplinas', {
    responses: {
      '200': {
        description: 'Array of Professor has many Disciplina',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Disciplina)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Disciplina>,
  ): Promise<Disciplina[]> {
    return this.professorRepository.profDisc(id).find(filter);
  }

  @post('/professors/{id}/disciplinas', {
    responses: {
      '200': {
        description: 'Professor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Disciplina)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Professor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Disciplina, {
            title: 'NewDisciplinaInProfessor',
            exclude: ['id'],
            optional: ['professorId']
          }),
        },
      },
    }) disciplina: Omit<Disciplina, 'id'>,
  ): Promise<Disciplina> {
    return this.professorRepository.profDisc(id).create(disciplina);
  }

  @patch('/professors/{id}/disciplinas', {
    responses: {
      '200': {
        description: 'Professor.Disciplina PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Disciplina, {partial: true}),
        },
      },
    })
    disciplina: Partial<Disciplina>,
    @param.query.object('where', getWhereSchemaFor(Disciplina)) where?: Where<Disciplina>,
  ): Promise<Count> {
    return this.professorRepository.profDisc(id).patch(disciplina, where);
  }

  @del('/professors/{id}/disciplinas', {
    responses: {
      '200': {
        description: 'Professor.Disciplina DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Disciplina)) where?: Where<Disciplina>,
  ): Promise<Count> {
    return this.professorRepository.profDisc(id).delete(where);
  }
}
