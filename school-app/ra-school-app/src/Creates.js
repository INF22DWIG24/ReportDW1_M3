import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput} from 'react-admin';

export const AlunoCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="nAluno" />
            <ReferenceInput source="disciplinaId" reference="disciplinas">
                <SelectInput optionText="nome"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const CursoCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="nome"/>
            <NumberInput  source="nrAnos"/>
        </SimpleForm>
    </Create>
);

export const DisciplinaCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="ano"/>
            <TextInput source="nome"/>
            <ReferenceInput source="cursoId" reference='cursos'>
                <SelectInput optionText="nome"/>
            </ReferenceInput>
            <ReferenceInput source="professorId" reference="professors">
                <SelectInput optionText="nome"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const ProfessorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="nome"/>
        </SimpleForm>
    </Create>
);