import AuthForm from "@/components/AuthForm";

const SignupPage = () => {
  const signupHandler = async (email: string, password: string) => {
    
  }

  return (
    <AuthForm type='Signup' submitForm={signupHandler} />
  );
};

export default SignupPage;
