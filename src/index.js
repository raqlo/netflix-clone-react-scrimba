import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyC1mqqGsn43PDaf4Ik-nD_emfL0fW6WtwM",
    authDomain: "netflix-clone-11e4e.firebaseapp.com",
    databaseURL: "https://netflix-clone-11e4e-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-11e4e",
    storageBucket: "netflix-clone-11e4e.appspot.com",
    messagingSenderId: "609918165092",
    appId: "1:609918165092:web:27286faedbf1a249817f71",
    measurementId: "G-9PP8QYP517"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);