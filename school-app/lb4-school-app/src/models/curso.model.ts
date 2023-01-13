import {Entity, model, property} from '@loopback/repository';

@model()
export class Curso extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    mysql: {
      columnName: "nr_anos"
    },
    default: 3,
  })
  nrAnos?: number;


  constructor(data?: Partial<Curso>) {
    super(data);
  }
}

export interface CursoRelations {
  // describe navigational properties here
}

export type CursoWithRelations = Curso & CursoRelations;
