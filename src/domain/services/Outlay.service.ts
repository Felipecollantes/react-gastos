import { outlayRepository } from "../../infrastructure/repositories/outlay.repository"
import { Outlay } from '../models/Outlay';

export const outlayService = {
    getOutlays: () => {
      return outlayRepository.getOutlays()
    },
  
    addOutlay: (body: Outlay) => {
      return outlayRepository.addOutlay(body)
    }
  }