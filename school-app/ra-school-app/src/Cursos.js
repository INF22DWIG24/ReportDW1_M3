import { Create, Edit, NumberInput, SimpleForm, TextInput, Datagrid, List, ReferenceField, TextField, NumberField, EditButton, Show, SimpleShowLayout, ReferenceManyField, ShowButton} from 'react-admin';

export const CursoList = () => (
    <List>
        <Datagrid>
            <TextField source="nome" />
            <NumberField source="nrAnos" />
        <EditButton/>
        <ShowButton label="disciplinas"/>
        </Datagrid>
    </List>
);

export const CursoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="nome" />
            <NumberInput source="nrAnos" />
        </SimpleForm>
    </Edit>
);

export const CursoDisciplina = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="nome"/>
            <ReferenceManyField reference="disciplinas" target="cursoID">
                <Datagrid>
                    <NumberField source="ano"/>
                    <TextField source="nome"/>
                    <ReferenceField source="professorId" reference='professors'>
                        <TextField source="nome"/>
                    </ReferenceField>
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);

export const CursoCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="nome"/>
            <NumberInput  source="nrAnos"/>
        </SimpleForm>
    </Create>
);