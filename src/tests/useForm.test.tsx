import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { useForm } from '../domain/hooks/useForm'

describe('Test useForm', () => {
  const outlay = {
    id: '1213erf',
    namePerson: 'Felipe',
    nameOutlay: 'Cena',
    price: 5,
    date: 123445,
    since: 'Hace 5 dias',
    diffPrice: 0,
  }

  test('Return default form', () => {
    const { result } = renderHook(() => useForm(outlay))
    const { formData, onChange, resetForm } = result.current

    expect(formData).toEqual(outlay)
    expect(typeof onChange).toBe('function')
    expect(typeof resetForm).toBe('function')
  })
})
