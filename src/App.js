import { Todo } from './component/Todo';
import './App.css';
import { Modal } from './component/Modal';
import { Overlay } from './component/Overlay';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react" />
      <Todo text="learn Js" />
      <Todo text="learn css" />
      <Modal></Modal>
      <Overlay></Overlay>
    </div>
  );
}



export default App;

