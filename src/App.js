import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import "./App.css";
import { auth, db, provider } from "./firebase";

function App() {

  const [user] = useAuthState(auth)
  const messagesRef = db.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)
  const [messages] = useCollectionData(query)

  function signInWithGoogle(){
    auth.signInWithPopup(provider)
  }

  function ChatRoom(){

    function ChatMessage({ key , message}){
      return <h5> {message.text} </h5>
    }

    function sendMessages(e){
      e.preventDefault();

    }


    return(
      <div>
        <header>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </header>
        <section>
          <form onSubmit={sendMessages}>
            <input type="text" />
            <button type="submit" >🚀</button>
          </form>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        </section>
      </div>
    )
  }

  function SignIn(){
    return(
      <button onClick={signInWithGoogle}>
        Sign In!
      </button>
    )
  }


  return (
    <div className="App">
      <header>
        
      </header>

      <section>
        {user? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  );
}




export default App;
