import { Tours } from "./Tours"

const GetItems = new Promise((aceptada, rechazada) => {
    setTimeout(() => {
        aceptada(Tours);
    }, 2000);
});

export default GetItems