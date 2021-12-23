import { Outlay } from "../models/Outlay"


const parseDate = (respo: any) => {
  const ahora = Date.now();
  const fechita = new Date(ahora);

  let seconds: number;
  let minutes: number;
  let hours: number;
  let days: number;
  const parseDate = new Date(respo.date);
  seconds = (fechita.getTime() - parseDate.getTime()) / 1000;
  minutes = Math.trunc(seconds / 60);
  hours = Math.trunc(minutes / 60);
  days = Math.trunc(hours / 24);
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
  respo.since = result;
}

const calculo = (data: Outlay[]) => {
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
    calculo, parseDate
  }
  