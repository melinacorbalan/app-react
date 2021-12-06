import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC8OdEnYYpdKgYXQSRcz5Izr26gTyCbx1U",
  authDomain: "unlugardepelicula-6b127.firebaseapp.com",
  projectId: "unlugardepelicula-6b127",
  storageBucket: "unlugardepelicula-6b127.appspot.com",
  messagingSenderId: "507975917597",
  appId: "1:507975917597:web:7ffc4a578b815042cf66f4",
  measurementId: "G-TH5PYE8SP6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;