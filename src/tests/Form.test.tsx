import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import translate from '../i18n'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Form } from '../infrastructure/components/Form'
import userEvent from '@testing-library/user-event'

describe('Test useForm', () => {
  const outlays = [
    {
      id: '1213erf',
      namePerson: 'Felipe',
      nameOutlay: 'Cena',
      price: 5,
      date: 123445,
      since: 'Hace 5 dias',
      diffPrice: 0,
    },
  ]

  const setOutlays = null

  test('Render Form', () => {
    render(<Form outlays={outlays} setOutlays={setOutlays} />)
    screen.getByText(translate.FORM.TITLE)

    // const submit = screen.getByTestId('btn-submit')
    // fireEvent.click(submit)
  })

  test('Submit Form', () => {
    render(<Form outlays={outlays} setOutlays={setOutlays} />)
    // fireEvent.change(screen.getByTestId('namePerson'),{
    //     target:{value:''}
    // })
    // const newTodo = [
    //   {
    //     id: '1213erf',
    //     namePerson: 'Felipe',
    //     nameOutlay: 'Cena',
    //     price: 5,
    //     date: 123445,
    //     since: 'Hace 5 dias',
    //     diffPrice: 0,
    //   },
    // ]

    userEvent.type(screen.getByPlaceholderText(translate.FORM.INPUT_PERSON), 'Felipe')
    userEvent.type(screen.getByPlaceholderText(translate.FORM.INPUT_OUTLAY), 'Cena')
    userEvent.type(screen.getByPlaceholderText(translate.FORM.INPUT_AMOUNT), '5')

    const submit = screen.getByText(translate.FORM.BUTTON)
    userEvent.click(submit)
  })
})
