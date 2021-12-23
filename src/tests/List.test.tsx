import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { List } from '../ui/components/List'
import translate from '../assets/i18n'

test('renders content', () => {
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

  render(<List outlays={outlays} />)
  screen.getByText(translate.LIST.TITLE_OUTLAYS)
})
