import {Admin, Resource} from "react-admin";
import lb4Provider from "react-admin-lb4";
import { AlunoCreate, AlunoEdit, AlunoList } from "./Alunos";
import { CursoCreate, CursoDisciplina, CursoEdit, CursoList } from "./Cursos";
import { DisciplinaAlunos, DisciplinaCreate, DisciplinaEdit, DisciplinaList } from "./Disciplinas";
import { ProfessorCreate, ProfessorEdit, ProfessorList } from "./Professores";

const dataProvider = lb4Provider("http://localhost:3000/");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource   name="alunos" 
                options={{label: "Alunos"}}
                list={AlunoList} 
                edit={AlunoEdit} 
                create={AlunoCreate}
    />
    <Resource   name="cursos" 
                options={{label: "Cursos"}}
                list={CursoList} 
                edit={CursoEdit} 
                create={CursoCreate}
                show={CursoDisciplina}
    />
    <Resource   name={`disciplinas`}
                options={{label: "Disciplinas"}}
                list={DisciplinaList} 
                edit={DisciplinaEdit} 
                create={DisciplinaCreate}
                show={DisciplinaAlunos}
                
    />
    <Resource   name="professors" 
                options={{label: "Professores"}} 
                list={ProfessorList} 
                edit={ProfessorEdit} 
                create={ProfessorCreate}
    />
    
  </Admin>
);

export default App;