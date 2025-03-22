import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwyIbIylEDy1ubEjhEZRz0AOAO2NHUN7M",
    authDomain: "uni-mobile-app-dev-labwork.firebaseapp.com",
    projectId: "uni-mobile-app-dev-labwork",
    storageBucket: "uni-mobile-app-dev-labwork.appspot.com",
    messagingSenderId: "691751097052",
    appId: "1:691751097052:web:45123a838b3827611eda19",
    measurementId: "G-5HBLXDN7FB"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  

  export async function loginUser(username: string, password: string) {

    const email = `${username}@fakemaillol.com`
    //convert username to a fake email for email auth in firebase
    //please dont crucify me for this i didnt want to parse every username and i couldnt figure 
    //out how to do username logins on firebase
    try {
    const res = await firebase.auth().signInWithEmailAndPassword(email,password)
    console.log(res)
    return true

    } catch(error) {
        console.log(error)
        return false
    }
    // authenticating with firebase
    // if user, proceed, if not, error
  }

  export async function registerUser(username: string, password: string) {
    const email = `${username}@fakemaillol.com`
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        
        return false
        
    }
  }