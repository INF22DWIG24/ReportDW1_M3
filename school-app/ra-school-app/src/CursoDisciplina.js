
import { 
    Create, 
    NumberInput, 
    SimpleForm, 
    TextInput, 
    ReferenceInput, 
    SelectInput, 
    Datagrid, 
    List, 
    ReferenceField, 
    TextField, 
    NumberField, 
    EditButton,
    ShowButton,
    Filter
} from 'react-admin';

export const CursoDisciplinaFilter = (props) => 
    <Filter {...props}>
        <TextInput label="Search" source="nome" alwaysOn/>
        <SelectInput optionText="description"/>
    </Filter>

export const CursoDisciplinaList = (props) => (
    <List filters={<CursoDisciplinaFilter/>}{...props}>
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

export const CursoDisciplinaCreate = (props) => {
    console.log(props);
    return (<Create {...props}>
        <SimpleForm>
            <NumberInput source="ano"/>
            <TextInput source="nome"/>
            {/* <ReferenceInput source="cursoId" reference='cursos'>
                <SelectInput optionText="nome"/>
            </ReferenceInput> */}
            <ReferenceInput source="professorId" reference="professors">
                <SelectInput optionText="nome"/>
            </ReferenceInput>
        </SimpleForm>
    </Create>)
};

