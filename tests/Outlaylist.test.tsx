import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import translate from '../src/assets/i18n'
import { render, screen } from '@testing-library/react'
import { OutlayList } from '../src/ui/components/OutlayList'

describe('Test OutlayList', () => {
  test('Render OutlayList', () => {
    render(<OutlayList />)
    screen.getByText(translate.FORM.TITLE)
  })
})
