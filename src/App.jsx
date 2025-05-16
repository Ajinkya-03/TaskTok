import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer.jsx'
import TodoContainer from './components/TodoContainer.jsx'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  
  const [inputVal , setInputVal] = useState('')
  const [todo, setTodo] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal !== '') {
      setTodo((prevTodo) => [...prevTodo, { text: inputVal, done: false }]);
      setInputVal('');
      toast.success('Task Added Successfully!');
    }
  }

  //console.log(todo) JUST TO CHECK WEATHER IT GETS PRINTED IN CONSOLE
  
   function delTodo(todoIndex) {
    const deletedTask = todo[todoIndex].text; // Get the task text for the toast
    setTodo((prevTodo) =>
      prevTodo.filter((_, prevTodoIndex) => prevTodoIndex !== todoIndex)
    );
    // Show toast for deletion
    toast.error(`Task Deleted: "${deletedTask}"`);
  }

  function toggleDone(index) {
    setTodo((prevTodo) =>
      prevTodo.map((item, i) => {
        if (i === index) {
          if (!item.done) {
            // Display toast notification for completeion of task
            toast.success(`Task Completed: "${item.text}"`);
          }
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  }

  
  return (
    <main>

    <h1 className=''>To-Do Manager</h1>

    <InputContainer  inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
    <TodoContainer todos={todo} delTodo={delTodo}  toggleDone={toggleDone}/>
    

    {/* Added Tostify */}
    <ToastContainer position="top-right" autoClose={1000} hideProgressBar newestOnTop closeOnClick /> 



    </main>
  )
}

export default App
