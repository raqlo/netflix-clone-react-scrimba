import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { UserAuthContextProvider} from './context/useAuthContext';

ReactDOM.render(
    <>
        <UserAuthContextProvider>
            <GlobalStyles />
            <App />
        </UserAuthContextProvider>
    </>,
    document.getElementById('root')
);
