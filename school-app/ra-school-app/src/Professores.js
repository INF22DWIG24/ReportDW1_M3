import { Create, Edit, TextInput, Datagrid, List, TextField, EditButton, SimpleForm, useRecordContext, Filter, SelectInput} from 'react-admin';

export const ProfessorFilter = (props) => 
    <Filter {...props}>
        <TextInput label="Search" source="nome" alwaysOn/>
        <SelectInput optionText="description"/>
    </Filter>

const ProfessorTitle = () => {
    const record = useRecordContext();
    return record ? (<span>Professor {`"${record.nome}"`}</span>):null;
};

export const ProfessorList = (props) => (
    <List filters={<ProfessorFilter/>}{...props}>
        <Datagrid>
            <TextField source="nome" />
        <EditButton/>
        </Datagrid>
    </List>
);

export const ProfessorEdit = (props) => (
    <Edit title={<ProfessorTitle/>}{...props}>
        <SimpleForm>
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
);

export const ProfessorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="nome"/>
        </SimpleForm>
    </Create>
);