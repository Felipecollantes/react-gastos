import { Outlay } from "../models/Outlay"

/**
 * Method that calculates the time elapsed since the insertion of the expense
 * @param outlay the outlay
 */
const parseDate = (outlay: Outlay) => {
  const now = Date.now();
  const dateNow = new Date(now); // Now date

  let seconds: number;
  let minutes: number;
  let hours: number;
  let days: number;
  const parseDate = new Date(outlay.date); // Parse to date the outlay date
  // We calculate the time in hours, minutes and seconds
  seconds = (dateNow.getTime() - parseDate.getTime()) / 1000;
  minutes = Math.trunc(seconds / 60);
  hours = Math.trunc(minutes / 60);
  days = Math.trunc(hours / 24);
  // We check what we show on the screen
  let result: string;
  if (days > 0) {
    result = 'Hace ' + String(days) + ' dia(s)';
  } else if (days === 0 && hours > 0) {
    result = 'Hace ' + String(hours) + ' hora(s)';
  } else if (days === 0 && hours === 0 && minutes > 0) {
    result = 'Hace ' + String(minutes) + ' minuto(s)';
  } else {
    result = 'Hace unos segundos...';
  }
  outlay.since = result;
}

/**
 * Method that calculates the difference between 
 * a person's spending compared to the total
 * @param data outlays list
 */
const calcDiffPrice = (data: Outlay[]) => {
  let total = 0;
  data.forEach((element: Outlay) => {
    total += +element.price;
  })
  const equitativo = total / data.length;

  let diferencia = 0;
 
  data.forEach((element: Outlay) => {
    diferencia = equitativo - element.price;
    diferencia = Math.round(diferencia * 100) / 100;

    element.diffPrice = diferencia;
  })
}
  
  export const listService = {
    calcDiffPrice, parseDate
  }
  