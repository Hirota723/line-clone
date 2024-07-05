"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase";
import Line from "@/components/Line";
import SignIn from "@/components/SignIn";

const Home = () => {
  const [user] = useAuthState(auth);

  return <div>{user ? <Line /> : <SignIn />}</div>;
};

export default Home;
