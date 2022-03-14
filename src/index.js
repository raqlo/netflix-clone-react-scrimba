import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { UserAuthContextProvider} from './context/useAuthContext';

// import {db} from './firebase'
// import {doc, addDoc, collection} from "firebase/firestore";
// import {seed} from "./seed";

// export const createSeries = async (series) => {
//     await addDoc(collection(db, 'series'), series);
// };
//
// createSeries({ title: 'Tiger King',
//     description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
//     genre: 'documentaries',
//     maturity: '18',
//     slug: 'tiger-king',}).then((e) => console.log('series successfully sent', e));

//  const createSeries = async (series) => {
//     await addDoc(collection(db, 'series'), series);
// };
//
//  seed.series.forEach((serie) => {
//      createSeries(serie).then(r => console.log('series sent', r.title)).catch(e => console.warn('error--',e))
//  })

//  const createFilms= async (film) => {
//     await addDoc(collection(db, 'films'), film);
// };
//
//  seed.films.forEach((film) => {
//      createFilms(film).then(r => console.log('film sent')).catch(e => console.warn('error--',e))
//  })

ReactDOM.render(
    <>
        <UserAuthContextProvider>
            <GlobalStyles />
            <App />
        </UserAuthContextProvider>
    </>,
    document.getElementById('root')
);
