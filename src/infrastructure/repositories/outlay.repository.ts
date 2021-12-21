import { Outlay } from '../../domain/models/Outlay'
import { OutlayDTO } from '../http/dto/outlayDto'
import { http } from '../http/http'

export const outlayRepository = {
    getOutlays: async () => {
      const outlays = await http.get<OutlayDTO[]>('http://localhost:3001/products')
      // we can extract this transform to a function inside this file to be reused by different methods
      return outlays.map((outlayDto): OutlayDTO => ({
        id: outlayDto.id,
        namePerson: outlayDto.namePerson,
        nameOutlay: outlayDto.nameOutlay,
        price: Number(outlayDto.price),
        date: outlayDto.date,
        since: '',
        diffPrice: 0
      }))
    },
  
    addOutlay: async (body: Outlay) => {
      const outlays = await http.post<OutlayDTO>('http://localhost:3001/products', JSON.stringify(body))
      return outlays
    }
  }
  