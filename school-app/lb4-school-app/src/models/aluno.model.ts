import {Entity, model, property} from '@loopback/repository';

@model()
export class Aluno extends Entity {
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
    type: 'string',
    required: true,
  })
  n_aluno: string;

  @property({
    type: 'number',
    required: true,
  })
  disciplina_id: number;


  constructor(data?: Partial<Aluno>) {
    super(data);
  }
}

export interface AlunoRelations {
  // describe navigational properties here
}

export type AlunoWithRelations = Aluno & AlunoRelations;
