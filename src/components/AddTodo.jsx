import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addTodo, updateTodo, setTodoText} from '../features/todo/todoSlice'

function AddTodo() {
         
    const dispatch = useDispatch()
    const todoText = useSelector(state => state.todoText)
    const canTodoBeEdited = useSelector(state => state.canTodoBeEdited)

   
    const handleSubmit = (e) => {
      e.preventDefault()
      if(canTodoBeEdited){
        dispatch(updateTodo())
      }else{
        dispatch(addTodo())
      }
  }

    // const updateTodoHandler = (e) => {
    //   e.preventDefault()
    //   dispatch(updateTodoBtnPushed())
    //   setInput("")
    // }

    



    return (
        <form onSubmit={handleSubmit} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder={canTodoBeEdited ? "Update the Todo..." : "Enter a Todo..."}
            value={todoText}
            onChange={(e) => dispatch(setTodoText(e.target.value))}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {canTodoBeEdited ? "UpdateTodo" : "AddTodo"}
          </button>
        </form>
    )
}

export default AddTodo