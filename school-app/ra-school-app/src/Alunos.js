import { Datagrid, List, ReferenceField, TextField, EditButton, Filter, TextInput, SelectInput, Edit, SimpleForm, ReferenceInput, Create} from 'react-admin';

export const AlunoEdit = (props) => (
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

export const AlunoFilter = (props) => 
    <Filter {...props}>
        <TextInput label="Search" source="nome" alwaysOn/>
        <TextInput source="nAluno"/>
        <SelectInput optionText="description"/>
    </Filter>

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