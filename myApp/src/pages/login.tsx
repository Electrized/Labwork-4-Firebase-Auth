import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToast, IonToolbar, useIonToast } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebaseConfig'


const login: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false)

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const [present, dismiss] = useIonToast()

  async function login() {
    setBusy(true)
    const res = await loginUser(username, password);
    if(!res){
      present("Error logging with your credentials", 2000)
    } else {
      present("You have logged in!", 2000)
    }
    setBusy(false)
  
            
    }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait, logging in" duration={0} isOpen={busy}></IonLoading>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonInput 
        placeholder="Username?" 
        onIonChange={(e: any) => setUsername(e.target.value)}>
        </IonInput>


        <IonInput 
        type="password"
        placeholder='Password?'
        onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        <IonButton onClick={login}>Login</IonButton>

        <p>Not registered? <Link to="/register">Register here</Link></p>


      </IonContent>
    </IonPage>
  );
};

export default login;
