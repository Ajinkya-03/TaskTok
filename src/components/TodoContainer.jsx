import React from 'react';
import Todo from './Todo';

function TodoContainer({ todos , delTodo, toggleDone }) {
  return (
    <div className='container'>

      {todos.map((todo, index) => (
        <Todo 
        index={index} 
        todo={todo} 
        delTodo={delTodo}
        toggleDone={toggleDone}/>

      ))}
    </div>
  );
}

export default TodoContainer;
