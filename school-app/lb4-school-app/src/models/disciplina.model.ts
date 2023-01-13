import {Entity, model, property} from '@loopback/repository';

@model()
export class Disciplina extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    default: 2022,
  })
  ano?: number;

  @property({
    type: 'number',
    mysql: {
      columnName: "curso_id"
    },
    required: true,
  })
  cursoId: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    mysql: {
      columnName: "professor_id"
    },
    required: true,
  })
  professorId: number;


  constructor(data?: Partial<Disciplina>) {
    super(data);
  }
}

export interface DisciplinaRelations {
  // describe navigational properties here
}

export type DisciplinaWithRelations = Disciplina & DisciplinaRelations;
