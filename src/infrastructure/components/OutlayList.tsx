import { FormEvent, useEffect, useState } from 'react'
import { Outlay } from '../../domain/models/Outlay'
import { outlayService } from '../../domain/services/Outlay.service'
import * as uuid from 'uuid'
import { useForm } from '../../hooks/useForm'
import './styles.css'

export const OutlayList = () => {
  const { formData, onChange, resetForm, namePerson, nameOutlay, price } = useForm({
    namePerson: '',
    nameOutlay: '',
    price: 0,
  })

  const [outlays, setOutlays] = useState<Outlay[]>([])

  useEffect(() => {
    outlayService.getOutlays().then(setOutlays)
  }, [outlays])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)

    const newTodo: Outlay = {
      id: uuid.v4(),
      namePerson: namePerson,
      nameOutlay: nameOutlay,
      price: price,
    }

    outlayService.addOutlay(newTodo)
    resetForm()
  }

  return (
    <div>
      <h1>TODOApp</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {outlays.map((outlay, indice) => (
              <li key={outlay.id} className="list-group-item">
                <p className="text-center">
                  {indice + 1}. {outlay.namePerson} {outlay.nameOutlay} {outlay.price}
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
              name="namePerson"
              placeholder="Nombre de la persona"
              autoComplete="off"
              value={namePerson}
              onChange={onChange}
            />

            <input
              className="form-control"
              type="text"
              name="nameOutlay"
              placeholder="Motivo del gasto"
              autoComplete="off"
              value={nameOutlay}
              onChange={onChange}
            />

            <input
              className="form-control"
              type="number"
              name="price"
              placeholder="Cantidad"
              autoComplete="off"
              value={price || ''}
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
