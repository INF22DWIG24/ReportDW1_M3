import React from 'react';
import {
    Create, 
    Edit, 
    NumberInput, 
    SimpleForm, 
    TextInput, 
    Datagrid, 
    List, 
    ReferenceField, 
    TextField, 
    NumberField, 
    EditButton, 
    Show, 
    SimpleShowLayout, 
    ReferenceManyField, 
    ShowButton, 
    useRecordContext,
    CreateButton
    // Resource
} from 'react-admin';
// import lb4Provider from 'react-admin-lb4';
// import {useLocation} from "react-router-dom";

// const dataProvider = lb4Provider("http://localhost:3000/");

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


export const CursoDisciplina = (props) => {
    // const location = useLocation();
    // const cursoUrl = location.pathname;
    // const cursoId = cursoUrl.split("/")[2];
    return(
    <Show title={<CursoTitle/>}{...props}>
        <SimpleShowLayout>
            <TextField source="nome"/>
            <ReferenceManyField reference={'disciplinas'} target={"cursoId"}>
                <CreateButton {...props}/>
                <Datagrid>
                    <NumberField source="ano"/>
                    <TextField source="nome"/>
                    <ReferenceField source="professorId" reference='professors'>
                        <TextField source="nome"/>
                    </ReferenceField>
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>)
};


export const CursoCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="nome"/>
            <NumberInput  source="nrAnos"/>
        </SimpleForm>
    </Create>
);