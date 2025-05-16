import React from 'react'

function Todo({todo , index, delTodo, toggleDone}) {

  return (
    <div className='todo'>
        <p style={{ backgroundColor: todo.done ? '#d3d3d3' : 'transparent', padding: '8px', borderRadius: '4px' }}> 
          {todo.text}
        </p>

        <div className='actions'>

        <button className='done-btn' onClick={() => toggleDone(index)}>
        {todo.done ? 'Undo' : 'Done'}
        </button>

          <button className='delete-btn' onClick={() => delTodo(index)}>Delete</button>

        </div>
      </div>
  )
}

export default Todo