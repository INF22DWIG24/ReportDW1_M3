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
  Curso,
  Disciplina,
} from '../models';
import {CursoRepository} from '../repositories';

export class CursoDisciplinaController {
  constructor(
    @repository(CursoRepository) protected cursoRepository: CursoRepository,
  ) { }

  @get('/cursos/{id}/disciplinas', {
    responses: {
      '200': {
        description: 'Array of Curso has many Disciplina',
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
    return this.cursoRepository.cursoDisc(id).find(filter);
  }

  @post('/cursos/{id}/disciplinas', {
    responses: {
      '200': {
        description: 'Curso model instance',
        content: {'application/json': {schema: getModelSchemaRef(Disciplina)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Curso.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Disciplina, {
            title: 'NewDisciplinaInCurso',
            exclude: ['id'],
            optional: ['cursoId']
          }),
        },
      },
    }) disciplina: Omit<Disciplina, 'id'>,
  ): Promise<Disciplina> {
    return this.cursoRepository.cursoDisc(id).create(disciplina);
  }

  @patch('/cursos/{id}/disciplinas', {
    responses: {
      '200': {
        description: 'Curso.Disciplina PATCH success count',
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
    return this.cursoRepository.cursoDisc(id).patch(disciplina, where);
  }

  @del('/cursos/{id}/disciplinas', {
    responses: {
      '200': {
        description: 'Curso.Disciplina DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Disciplina)) where?: Where<Disciplina>,
  ): Promise<Count> {
    return this.cursoRepository.cursoDisc(id).delete(where);
  }
}
