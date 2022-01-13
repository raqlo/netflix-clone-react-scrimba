import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";
import { useUserAuth } from "../context/useAuthContext";

export default function Signin() {
  const { logIn } = useUserAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = (password === "") | (emailAddress === "");

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      await logIn(emailAddress, password);
      setEmailAddress("");
      setPassword("");
      setError("");
      history.push(ROUTES.BROWSE);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
