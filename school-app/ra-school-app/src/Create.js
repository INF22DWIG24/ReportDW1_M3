import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput} from 'react-admin';

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

