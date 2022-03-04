// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCsbe0bAwdTrXtFhn0psb1wKHFSDYVDhcU',
  authDomain: 'unsplashy-0410.firebaseapp.com',
  projectId: 'unsplashy-0410',
  storageBucket: 'unsplashy-0410.appspot.com',
  messagingSenderId: '301885809347',
  appId: '1:301885809347:web:8af01b85e0566fefa57876',
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

