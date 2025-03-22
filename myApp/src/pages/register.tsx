import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../firebaseConfig'

const register: React.FC = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[cpassword, setCPassword] = useState('')
    const [present, dismiss] = useIonToast()
    const [busy, setBusy] = useState<boolean>(false)


    async function register() {
        setBusy(true)
        console.log(username, password, cpassword)
        if(password !== cpassword){
            present("Passwords do not match", 2000)
            console.log("Passwords do not match")
        }
        if (username.trim() === '' || password.trim() === '') {
            present("Username and password are required!")
        }

        const res = await registerUser(username, password)
        if(!res){
            present("Error registering user", 2000)
          } else {
            present("You have registered!", 2000)
          }
          setBusy(false)
             
    } 



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading message="Please wait, registering" duration={0} isOpen={busy}></IonLoading>
        <IonInput 
        placeholder="Username?" 
        onIonChange={(e: any) => setUsername(e.target.value)}>
        </IonInput>


        <IonInput 
        type="password"
        placeholder='Password?'
        onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        
        
        <IonInput 
        type="password"
        placeholder='Confirm Password?'
        onIonChange={(e: any) => setCPassword(e.target.value)}
        ></IonInput>

        <IonButton onClick={register}>Register</IonButton>

        <p>Already registered? <Link to="/login">Login here</Link></p>

        
        


      </IonContent>
    </IonPage>
  );
};

export default register;
