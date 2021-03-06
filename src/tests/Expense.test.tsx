import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Expense } from '../ui/components/Expense'
import translate from '../assets/i18n'

test('renders content', () => {
  const outlay = {
    id: '1213erf',
    namePerson: 'Felipe',
    nameOutlay: 'Cena',
    price: 5,
    date: 123445,
    since: 'Hace 5 dias',
    diffPrice: 0,
  }

  render(<Expense outlay={outlay} />)
  screen.getByText(`${translate.LIST.PERSON}:`)
  screen.getByText('Felipe')
  screen.getByText(`${translate.LIST.REASON}:`)
  screen.getByText('Cena')
  screen.getByText(`${translate.LIST.OUTLAY}:`)
  screen.getByText(5 + '€')
  screen.getByText('Hace 5 dias')
})
