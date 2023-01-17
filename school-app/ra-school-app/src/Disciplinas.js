
import { Create, Edit, NumberInput, SimpleForm, TextInput, ReferenceInput, SelectInput, Datagrid, List, ReferenceField, TextField, NumberField, EditButton, Show, SimpleShowLayout, ReferenceManyField, ShowButton, useRecordContext, Filter} from 'react-admin';

export const DisciplinaFilter = (props) => 
    <Filter {...props}>
        <TextInput label="Search" source="nome" alwaysOn/>
        <SelectInput optionText="description"/>
    </Filter>

const DisciplinaTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Disciplina {`"${record.nome}"`}</span>):null;
};

export const DisciplinaList = (props) => (
    <List filters={<DisciplinaFilter/>}{...props}>
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

export const DisciplinaEdit = (props) => (
    <Edit title={<DisciplinaTitle/>}{...props}>
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

export const DisciplinaCreate = (props) => {
    return (<Create {...props}>
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
    </Create>)
};

export const DisciplinaAlunos = (props) => (
    <Show title={<DisciplinaTitle/>}{...props}>
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

