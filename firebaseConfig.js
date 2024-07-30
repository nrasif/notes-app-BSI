import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB5JV-kYvk47W8Cilv4LL-t4NFNTQPT0Ek",
    authDomain: "notes-app-8dd13.firebaseapp.com",
    projectId: "notes-app-8dd13",
    storageBucket: "notes-app-8dd13.appspot.com",
    messagingSenderId: "294352735396",
    appId: "1:294352735396:web:25f2af726fe4558f686a31"
  };

const app = initializeApp(firebaseConfig);

export default app;