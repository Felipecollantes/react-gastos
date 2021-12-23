import { outlayRepository } from '../infrastructure/repositories/outlay.repository'

// import { http } from '../infrastructure/http/http'

describe('Outlay Repository', () => {
  test('GetOutlays', async () => {
    const get = await outlayRepository.getOutlays()
    const outlays = [
      {
        id: '4f39c525-7ddd-48ea-83d9-28e8f83b3b93',
        namePerson: 'Pipe',
        nameOutlay: 'cena',
        price: 20,
        date: 1640093430115,
        since: '',
        diffPrice: 0,
      },
      {
        id: '8a68c88b-38f7-4d17-95a9-7bca7d9b3e63',
        namePerson: 'Paco',
        nameOutlay: 'Cena',
        price: 15,
        date: 1640093437205,
        since: '',
        diffPrice: 0,
      },
      {
        id: '5f7fca19-aa54-4ed0-a6f0-8b4870a9f07a',
        namePerson: 'prueba',
        nameOutlay: 'er',
        price: 23,
        date: 1640184439725,
        since: '',
        diffPrice: 0,
      },
    ]

    expect(get).toEqual(outlays)
  })

  //   test('addOutlay', async () => {
  //     const outlay = {
  //       id: '4f39c525-7ddd-48ea-83d9-28e8f83b3b93',
  //       namePerson: 'Pipe',
  //       nameOutlay: 'cena',
  //       price: 20,
  //       date: 1640093430115,
  //       since: '',
  //       diffPrice: 0,
  //     }

  //     const post = await outlayRepository.addOutlay(outlay)
  //     console.log(post)
  //     // expect(post).toEqual(outlay)
  //   })

  //   test('GetHttp', async () => {
  //     const outlays = [
  //       {
  //         id: '4f39c525-7ddd-48ea-83d9-28e8f83b3b93',
  //         namePerson: 'Pipe',
  //         nameOutlay: 'cena',
  //         price: 20,
  //         date: 1640093430115,
  //         since: '',
  //         diffPrice: 0,
  //       },
  //       {
  //         id: '8a68c88b-38f7-4d17-95a9-7bca7d9b3e63',
  //         namePerson: 'Paco',
  //         nameOutlay: 'Cena',
  //         price: 15,
  //         date: 1640093437205,
  //         since: '',
  //         diffPrice: 0,
  //       },
  //       {
  //         id: '5f7fca19-aa54-4ed0-a6f0-8b4870a9f07a',
  //         namePerson: 'prueba',
  //         nameOutlay: 'er',
  //         price: 23,
  //         date: 1640184439725,
  //         since: '',
  //         diffPrice: 0,
  //       },
  //     ]
  //     const url = await http.get('http://localhost:3001/products')
  //     expect(url).toEqual(outlays)
  //   })
})
