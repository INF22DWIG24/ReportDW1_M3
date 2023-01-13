import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Disciplina} from './disciplina.model';

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

  @belongsTo(() => Disciplina, {name: 'alunodisc'})
  disciplina_id: number;

  constructor(data?: Partial<Aluno>) {
    super(data);
  }
}

export interface AlunoRelations {
  // describe navigational properties here
}

export type AlunoWithRelations = Aluno & AlunoRelations;
