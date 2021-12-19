import React, { FormEvent, useEffect, useReducer, useState } from 'react'
import * as uuid from 'uuid'
import { Prueba } from '../../domain/models/Prueba'
import { useForm } from '../../hooks/useForm'

import './styles.css'
import { ActionType, initialState, todoReducer } from './todo-reducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || '[]')
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  const { formData, onChange, resetForm, description } = useForm({
    description: '',
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)

    const newTodo: Prueba = {
      id: uuid.v4(),
      desc: description,
      done: false,
    }

    const action: ActionType = {
      type: 'add',
      payload: newTodo,
    }

    dispatch(action)
    resetForm()
  }

  return (
    <div>
      <h1>TODOApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, indice) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {indice + 1}.{todo.desc}
                </p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={onSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Aprender ..."
              autoComplete="off"
              value={description}
              onChange={onChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1 w-100">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
