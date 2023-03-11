//"use client"

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import Button from "./ui/Button";

type Props = {};

const SignInButton = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      //toast({
      //  title: "Error signin in",
      //  message: "Please try again later",
      //  type: "error",
      //});
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
