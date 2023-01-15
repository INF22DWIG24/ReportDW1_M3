
import { Create, Edit, NumberInput, SimpleForm, TextInput, ReferenceInput, SelectInput, Datagrid, List, ReferenceField, TextField, NumberField, EditButton, Show, SimpleShowLayout, ReferenceManyField, ShowButton} from 'react-admin';

export const DisciplinaList = () => (
    <List>
        <Datagrid>
            <NumberField source="ano" />
            <TextField source="nome" />
            <ReferenceField source="cursoId" reference="cursos">
                <TextField source='nome'/>
            </ReferenceField>
            <ReferenceField source="professorId" reference="professors">
                <TextField source='nome'/>
            </ReferenceField>
            <EditButton/>
            <ShowButton label="alunos"/>
        </Datagrid>
    </List>
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
export const DisciplinaAlunos = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="nome"/>
            <ReferenceManyField reference="alunos" target="disciplinaId">
                <Datagrid>
                    <TextField source="nome"/>
                    <TextField source="nAluno"/>
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
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