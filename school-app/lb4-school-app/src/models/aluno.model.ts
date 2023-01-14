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
  nAluno: string;

  @belongsTo(() => Disciplina, {name: 'alunoDisc'})
  disciplinaId: number;

  constructor(data?: Partial<Aluno>) {
    super(data);
  }
}

export interface AlunoRelations {
  // describe navigational properties here
}

export type AlunoWithRelations = Aluno & AlunoRelations;
