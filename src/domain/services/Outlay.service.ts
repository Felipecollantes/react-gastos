import { outlayRepository } from "../../infrastructure/repositories/outlay.repository"
import { Outlay } from '../models/Outlay';

export const outlayService = {
  /**
   * We make the get call through the repository
   * @returns the method
   */
    getOutlays: () => {
      return outlayRepository.getOutlays()
    },
  
    /**
     * We make the post call through the repository
     * @param body the outlay
     * @returns the method
     */
    addOutlay: (body: Outlay) => {
      return outlayRepository.addOutlay(body)
    }
  }