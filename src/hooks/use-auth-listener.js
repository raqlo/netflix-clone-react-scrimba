import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // User is signed out
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, []);
  return { user };
}
