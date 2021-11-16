import { Items } from "../Items/Items";


const GetFetch = new Promise((aceptada, rechazada) => {
    setTimeout(() => {
      // ACCIONES
      if (Items.length > 0) {
        aceptada(Items);
      } else {
        console.log('No hay productos');
      }
    }, 2000);
  });
  
  export default GetFetch;