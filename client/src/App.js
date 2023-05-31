import './App.css';

// components
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header />
      <ToDoForm />
      <Todos />
    </div>
  );
}

export default App;
