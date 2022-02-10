import { Todo } from './component/Todo';
import './App.css';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react" />
      <Todo text="learn Js" />
      <Todo text="learn css" />

    </div>
  );
}



export default App;

