import { Edit, NumberInput, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';

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
            <ReferenceInput source="disciplinaId" reference="disciplinas">
                <SelectInput optionText="nome"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const DisciplinaEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="ano" />
            <TextInput source="nome" />
            <ReferenceInput source="cursoId" reference="cursos">
                <SelectInput optionText="nome"/>
            </ReferenceInput>
            <ReferenceInput source="professorId" reference="professors">
                <SelectInput optionText="nome"/>
            </ReferenceInput>
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