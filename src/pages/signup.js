import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { updateProfile } from "firebase/auth";

import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import {useUserAuth} from "../context/useAuthContext";

export default function Signup() {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";
    const {signUp} = useUserAuth()
  const handleSignup = async (event) => {
    event.preventDefault();
    setError('')
    try {
        const userCredential = await signUp(emailAddress, password);
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })

      setEmailAddress("");
      setPassword("");
      setError("");
      history.push(ROUTES.BROWSE);
    } catch (err) {
        setError(err.message)
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
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
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to={`${ROUTES.SIGN_IN}`}>Sign up now.</Form.Link>
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
