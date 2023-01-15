import { Create, Edit, TextInput, Datagrid, List, TextField, EditButton, SimpleForm} from 'react-admin';

export const ProfessorList = () => (
    <List>
        <Datagrid>
            <TextField source="nome" />
        <EditButton/>
        </Datagrid>
    </List>
);

export const ProfessorEdit = () => (
    <Edit>
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