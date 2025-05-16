import React from 'react'

function InputContainer({inputVal, writeTodo , addTodo}) {
  return (
    <div className='input-container'>
      <input type="text" placeholder='Enter the task'  value={inputVal} onChange={writeTodo}/>
      <button className='add-btn' onClick={addTodo}>Add Task</button>
    </div>
  )
}

export default InputContainer