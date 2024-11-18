import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, startUpdate } from '../features/todo/todoSlice';


function Todos() {
  const [highlightItemUpdating,setHighlightItemUpdating] = useState(null)
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const canTodoBeEdited = useSelector(state => state.canTodoBeEdited)


  return (
    <>
      <div className='m-4 text-2xl'>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded ${canTodoBeEdited && highlightItemUpdating === todo.id ? "border-2 border-indigo-500" : "border-none"}`}
            key={todo.id}
          >
            <div className={`${canTodoBeEdited && highlightItemUpdating === todo.id? "text-gray-400" : "text-white"}`}>{canTodoBeEdited && highlightItemUpdating === todo.id? "Updating..." : todo.text}</div>
            <div className='flex flex-wrap gap-2'>
              <button
                onClick={() => {
                  dispatch(startUpdate({ id: todo.id, text: todo.text }))
                  setHighlightItemUpdating(todo.id)
                }}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                </svg>
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos