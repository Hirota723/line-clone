"use client";

import { Button } from "@mui/material";
import { auth, provider, signInWithPopup } from "@/utils/firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    // Googleの認証画面を開く
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
    </div>
  );
};

export default SignIn;
