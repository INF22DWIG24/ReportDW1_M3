import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Disciplina} from '../models';
import {DisciplinaRepository} from '../repositories';

export class DisciplinaController {
  constructor(
    @repository(DisciplinaRepository)
    public disciplinaRepository : DisciplinaRepository,
  ) {}

  @post('/disciplinas')
  @response(200, {
    description: 'Disciplina model instance',
    content: {'application/json': {schema: getModelSchemaRef(Disciplina)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Disciplina, {
            title: 'NewDisciplina',
            exclude: ['id'],
          }),
        },
      },
    })
    disciplina: Omit<Disciplina, 'id'>,
  ): Promise<Disciplina> {
    return this.disciplinaRepository.create(disciplina);
  }

  @get('/disciplinas/count')
  @response(200, {
    description: 'Disciplina model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Disciplina) where?: Where<Disciplina>,
  ): Promise<Count> {
    return this.disciplinaRepository.count(where);
  }

  @get('/disciplinas')
  @response(200, {
    description: 'Array of Disciplina model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Disciplina, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Disciplina) filter?: Filter<Disciplina>,
  ): Promise<Disciplina[]> {
    return this.disciplinaRepository.find(filter);
  }

  @patch('/disciplinas')
  @response(200, {
    description: 'Disciplina PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Disciplina, {partial: true}),
        },
      },
    })
    disciplina: Disciplina,
    @param.where(Disciplina) where?: Where<Disciplina>,
  ): Promise<Count> {
    return this.disciplinaRepository.updateAll(disciplina, where);
  }

  @get('/disciplinas/{id}')
  @response(200, {
    description: 'Disciplina model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Disciplina, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Disciplina, {exclude: 'where'}) filter?: FilterExcludingWhere<Disciplina>
  ): Promise<Disciplina> {
    return this.disciplinaRepository.findById(id, filter);
  }

  @patch('/disciplinas/{id}')
  @response(204, {
    description: 'Disciplina PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Disciplina, {partial: true}),
        },
      },
    })
    disciplina: Disciplina,
  ): Promise<void> {
    await this.disciplinaRepository.updateById(id, disciplina);
  }

  @put('/disciplinas/{id}')
  @response(204, {
    description: 'Disciplina PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() disciplina: Disciplina,
  ): Promise<void> {
    await this.disciplinaRepository.replaceById(id, disciplina);
  }

  @del('/disciplinas/{id}')
  @response(204, {
    description: 'Disciplina DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.disciplinaRepository.deleteById(id);
  }
}
