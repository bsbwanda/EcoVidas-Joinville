import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export const loginUser = async(email, senha) => {
  return await signInWithEmailAndPassword(
    auth,
    email,
    senha
  );
};
