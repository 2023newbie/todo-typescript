import AuthForm from "@/components/AuthForm";

const LoginPage = () => {
  const loginHandler = (email: string, password: string) => {}

  return (<AuthForm type="Login" submitForm={loginHandler} />);
};

export default LoginPage;
