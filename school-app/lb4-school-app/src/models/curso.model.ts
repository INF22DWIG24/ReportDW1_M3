import {Entity, model, property, hasMany} from '@loopback/repository';
import {Disciplina} from './disciplina.model';

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
    default: 3,
  })
  nrAnos?: number;

  @hasMany(() => Disciplina)
  cursoDisc: Disciplina[];

  constructor(data?: Partial<Curso>) {
    super(data);
  }
}

export interface CursoRelations {
  // describe navigational properties here
}

export type CursoWithRelations = Curso & CursoRelations;
