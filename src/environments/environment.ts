export const environment = {
  // firebase: {
  //   projectId: 'eliteprospects-89f23',
  //   appId: '1:637574595341:web:17f355f7f11dab9e0be644',
  //   databaseURL: 'https://eliteprospects-89f23-default-rtdb.firebaseio.com',
  //   storageBucket: 'eliteprospects-89f23.appspot.com',
  //   apiKey: 'AIzaSyD_d0ZSjxP83eqP4R3bQLe82ZtVcAhw9aY',
  //   authDomain: 'eliteprospects-89f23.firebaseapp.com',
  //   messagingSenderId: '637574595341',
  //   measurementId: 'G-JJRN4YF7N7',
  // },
    production: false
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_d0ZSjxP83eqP4R3bQLe82ZtVcAhw9aY",
  authDomain: "eliteprospects-89f23.firebaseapp.com",
  databaseURL: "https://eliteprospects-89f23-default-rtdb.firebaseio.com",
  projectId: "eliteprospects-89f23",
  storageBucket: "eliteprospects-89f23.appspot.com",
  messagingSenderId: "637574595341",
  appId: "1:637574595341:web:463d595dabd5a4bf0be644",
  measurementId: "G-B5XYJFK6CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

