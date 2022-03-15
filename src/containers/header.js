import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import {assetsUrlPrefix} from "../constants/utils";
export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={`${assetsUrlPrefix}/images/misc/logo.svg`} alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
