import AuthForm from "@/components/AuthForm";
import auth from "@/firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const signupHandler = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        console.log(userCredentials)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <AuthForm type='Signup' submitForm={signupHandler} />
  );
};

export default SignupPage;
