import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Welcome"}],
    todoText : "",
    canTodoBeEdited:false,
    currentId: null,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodoText: (state,action) => {
            state.todoText = action.payload
        },
        addTodo: (state, action) => {
           state.todos.push({
                id: nanoid(),
                text: state.todoText
            })
            state.todoText = ""
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        startUpdate: (state,action) => {
            const {id, text} = action.payload
            state.todoText = text
            state.canTodoBeEdited = true
            state.currentId = id
        },
        updateTodo(state) {
            const todo = state.todos.find(todo => todo.id === state.currentId);
            todo.text = state.todoText
            
            state.todoText = "";
            state.canTodoBeEdited = false;
            state.currentId = null;
          },
        
          
    }
})

export const {addTodo,removeTodo,updateTodo, setTodoText,startUpdate } = todoSlice.actions

export const todoReducer = todoSlice.reducer