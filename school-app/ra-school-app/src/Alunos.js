import { Datagrid, List, ReferenceField, TextField, EditButton, Filter, TextInput, SelectInput, Edit, SimpleForm, ReferenceInput, Create, useRecordContext} from 'react-admin';

export const AlunoFilter = (props) => 
    <Filter {...props}>
        <TextInput label="Search" source="nome" alwaysOn/>
        <TextInput source="nAluno"/>
        <SelectInput optionText="description"/>
    </Filter>

const AlunoTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Aluno {`"${record.nome}"`}</span>):null;
};

export const AlunoList = (props) => (
    <List filters={<AlunoFilter/>}{...props}>
        <Datagrid>
            <TextField source="nome" />
            <TextField source="nAluno" />
            <ReferenceField source="disciplinaId" reference="disciplinas">
                <TextField source='nome'/>
            </ReferenceField>
            <EditButton/>
        </Datagrid>
    </List>
);

export const AlunoEdit = (props) => (
    <Edit title={<AlunoTitle/>}{...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="nAluno" />
            <ReferenceInput source="disciplinaId" reference="disciplinas">
                <SelectInput optionText="nome"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

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