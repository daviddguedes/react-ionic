import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef, useState } from "react";

const Home = () => {
  const inputRef = useRef();
  const [goto,] = useState("");

  const searchPlaces = () => {

  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class="ion-align-items-end">
            <IonCol>
              <IonItem lines="full">
                <IonLabel position="floating">My Location</IonLabel>
                <IonInput ref={inputRef} onKeyUp={searchPlaces}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="full">
                <IonLabel position="floating">I am going to...</IonLabel>
                <IonInput value={goto}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton size="full" color="primary">
                Send
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
