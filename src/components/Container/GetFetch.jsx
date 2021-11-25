import { Tours } from "../Items/Tours";

const GetFetch = new Promise((aceptada, rechazada) => {
    setTimeout(() => {
      // ACCIONES
      if (Tours.length > 0) {
        aceptada(Tours);
      } else {
        console.log('No hay productos');
      }
    }, 2000);
  });

export default GetFetch

