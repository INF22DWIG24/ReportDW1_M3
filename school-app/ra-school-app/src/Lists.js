import { Datagrid, List, ReferenceField, TextField, NumberField, EditButton} from 'react-admin';

///////////////////////////////////////////////////////////////////////////////////////////////////////

export const AlunoList = () => (
    <List>
        <Datagrid>
            <TextField source="nome" />
            <TextField source="nAluno" />
            <ReferenceField source="disciplinaId" reference="disciplinas">
                <TextField source='nome'/>
            </ReferenceField>
        </Datagrid>
    </List>
);


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
        </Datagrid>
    </List>
);

export const CursoList = () => (
    <List>
        <Datagrid>
            <TextField source="nome" />
            <NumberField source="nrAnos" />
        </Datagrid>
    </List>
);

export const ProfessorList = () => (
    <List>
        <Datagrid>
            <TextField source="nome" />
        </Datagrid>
    </List>
);

