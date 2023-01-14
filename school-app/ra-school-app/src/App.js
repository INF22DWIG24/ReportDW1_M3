import {Admin, Resource} from "react-admin";
import lb4Provider from "react-admin-lb4";
import { AlunoEdit, CursoEdit, DisciplinaEdit, ProfessorEdit } from "./Edits";
import { AlunoList, CursoList, DisciplinaList, ProfessorList } from "./Lists";

const dataProvider = lb4Provider("http://localhost:3000/");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="alunos" list={AlunoList} edit={AlunoEdit} />
    <Resource name="cursos" list={CursoList} edit={CursoEdit}/>
    <Resource name="disciplinas" list={DisciplinaList} edit={DisciplinaEdit}/>
    <Resource name="professors" list={ProfessorList} edit={ProfessorEdit}/>
  </Admin>
);

export default App;