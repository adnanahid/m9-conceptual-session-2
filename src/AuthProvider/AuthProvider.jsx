import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  //handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("Google Login Successful:", result.user);
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  //   Create User with Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);

    // try {
    //   const result = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );
    //   setUser(result.user);
    //   console.log("User Registered Successfully:", result.user);
    // } catch (error) {
    //   console.error("Error Registering User:", error.message);
    // }
  };

  // LogIn User with Email and Password
  const loginUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    // try {
    //   setUser(result.user);
    //   console.log("Login Successful:", result.user);
    //   alert("Login Successful");
    // } catch (error) {
    //   console.error("Error Logging In:", error.message);
    // }
  };

  // Sign Out User
  const signOutUser = async () => {
    return signOut(auth);
    // try {
    //   setUser(null); // Clear user state
    //   console.log("User Signed Out Successfully");
    // } catch (error) {
    //   console.error("Error Signing Out:", error.message);
    // }
  };

  // Monitor Auth State Changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on component unmount
    return () => unSubscribe();
  }, []);
  const authTypes = {
    handleGoogleLogin,
    createUser,
    loginUser,
    signOutUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authTypes}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
