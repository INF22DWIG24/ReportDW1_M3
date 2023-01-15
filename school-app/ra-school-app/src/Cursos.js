import { Create, Edit, NumberInput, SimpleForm, TextInput, Datagrid, List, ReferenceField, TextField, NumberField, EditButton, Show, SimpleShowLayout, ReferenceManyField, ShowButton, useRecordContext} from 'react-admin';

const CursoTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Curso {`"${record.nome}"`}</span>):null;
};

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

export const CursoEdit = (props) => (
    <Edit title={<CursoTitle/>}{...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <NumberInput source="nrAnos" />
        </SimpleForm>
    </Edit>
);

export const CursoDisciplina = (props) => (
    <Show title={<CursoTitle/>}{...props}>
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