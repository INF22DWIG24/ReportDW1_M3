import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Curso} from './curso.model';
import {Professor} from './professor.model';
import {Aluno} from './aluno.model';

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
    type: 'string',
    required: true,
  })
  nome: string;
  @belongsTo(() => Curso, {name: 'cursodisc'})
  curso_id: number;

  @belongsTo(() => Professor, {name: 'profdisc'})
  professor_id: number;

  @hasMany(() => Aluno, {keyTo: 'disciplina_id'})
  alunosdisc: Aluno[];

  constructor(data?: Partial<Disciplina>) {
    super(data);
  }
}

export interface DisciplinaRelations {
  // describe navigational properties here
}

export type DisciplinaWithRelations = Disciplina & DisciplinaRelations;
