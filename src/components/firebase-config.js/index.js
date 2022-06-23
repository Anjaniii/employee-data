import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
const firebaseConfig = {
    apiKey: "AIzaSyCOURPDel7Y9iROrpFPW7rvkrmV-f8jhMY",
    authDomain: "employee-data-95736.firebaseapp.com",
    projectId: "employee-data-95736",
    storageBucket: "employee-data-95736.appspot.com",
    messagingSenderId: "894772993130",
    appId: "1:894772993130:web:68933823b3843aee6e3e13"
  };

  const app = initializeApp(firebaseConfig);

  return getDatabase(app);

}

export default StartFirebase;