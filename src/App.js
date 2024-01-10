import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className=' w-[100vw] h-[100vh] bg-purple-400 mt- flex flex-col items-center'>
      <p className='mt-16 text-4xl font-mono font-bold '>Learn About Redux</p>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;

