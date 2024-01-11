import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        //Update todo
        updateTodo: (state, action) => {
            const{id, newText} = action.payload;
            console.log("new",newText)
            const updatedTodo = state.todos.map((todo) => todo.id === id ? ({...todo, text: newText}) : (todo));
            state.todos = updatedTodo;
            console.log("first", updatedTodo)
        },
    }  
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer