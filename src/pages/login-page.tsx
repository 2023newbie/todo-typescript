import AuthForm from "@/components/AuthForm";
import auth from "@/firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const loginHandler = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        console.log(userCredentials)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (<AuthForm type="Login" submitForm={loginHandler} />);
};

export default LoginPage;
