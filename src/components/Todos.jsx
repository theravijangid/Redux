import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const [newText, setNewText] = useState('');
    const [editingTodoId, setEditingTodoId] = useState(null);

    const handleUpdate = (id) => {
        dispatch(updateTodo({ id: id, newText: newText }));

        console.log("id", id);
        console.log("text", newText);
    
        // Set newText and reset editing state after the state has been updated
        setNewText((prevText) => {
            console.log("updated text", prevText); // Log the updated text
            return ''; // Reset to an empty string
        });
    
        setEditingTodoId(null);
    };
  return (
    <div className=''>
        <div className='mt-12 text-3xl font-mono mb-4 font-bold'>Todo List</div>
        {
            todos.map((todo) => (
                <li key={todo.id} className='w-[500px] flex justify-between text-xl font-bold font-mono border-gray-900 border-2 rounded-md mb-2 p-2 bg-amber-600'>
                    {
                        editingTodoId === todo.id ? (
                            <input 
                                type='text'
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                            />
                        ) : (
                            <span>{todo.text}</span>
                        )
                    }
                    <div className='flex'>
                        <button className='px-4 font-bold font-sans' 
                            onClick={() => dispatch(removeTodo(todo.id))}>
                            <svg xmlns="http://www.w3.org/2000/svg"  height="16" width="14" viewBox="0 0 448 512">
                            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                        </button>
                        {
                            editingTodoId === todo.id ? (
                                <button onClick={() => handleUpdate(todo.id)}>
                                    Save
                                </button>
                            ) : (
                                <button onClick={() => {setEditingTodoId(todo.id);
                                
                                }}>
                                    Edit
                                </button>
                            )
                        }
                        
                    </div>
                    
                </li>
            ))
        }
    </div>
  )
}

export default Todos