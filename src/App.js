import { Todo } from './component/Todo';
import './App.css';

function App() {
  return (
   <div>
     <h1>My Todos</h1>
    <Todo text = "learn react" type="cancel"/> 
    <Todo  text="learn Js" type="hello"/>
    <Todo  text="learn css" type="test"/>
   </div>
  );
}



export default App;

