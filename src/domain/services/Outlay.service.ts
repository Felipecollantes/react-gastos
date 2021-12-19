import { outlayRepository } from "../../infrastructure/repositories/outlay.repository"

export const outlayService = {
    getOutlays: () => {
      return outlayRepository.getOutlays()
    },
  
    addOutlay: () => {
      return outlayRepository.addOutlay()
    }
  }