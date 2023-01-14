import { Edit, NumberInput, SimpleForm, TextInput, ReferenceInput } from 'react-admin';

export const CursoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="nome" />
            <NumberInput source="nrAnos" />
        </SimpleForm>
    </Edit>
);

export const AlunoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="nAluno" />
            <ReferenceInput source="disciplinaId" reference="disciplinas" />
        </SimpleForm>
    </Edit>
);

export const DisciplinaEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="ano" />
            <TextInput source="nome" />
            <ReferenceInput source="cursoId" reference="cursos" />
            <ReferenceInput source="professorId" reference="professors" />
        </SimpleForm>
    </Edit>
);

export const ProfessorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
);