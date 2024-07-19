import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    authDomain: "todolist-f7e76.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://todolist.asia-southeast1.firebasedatabase.app",
    projectId: "todolist-f7e76",
    // storageBucket: "PROJECT_ID.appspot.com",
    // messagingSenderId: "SENDER_ID",
    // appId: "APP_ID",
};

const app = initializeApp(firebaseConfig);

export default app
