import { AuthType } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  type: AuthType;
  submitForm: (email: string, password: string) => void;
};

const AuthForm = ({ type, submitForm }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mt-16 flex justify-center">
      <div className="rounded-lg bg-slate-800 p-12">
        <h1 className="mb-8 text-xl font-bold">{type} Your Account</h1>
        <form className="flex flex-col gap-6">
          <div className="flex justify-between gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="rounded bg-slate-700 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between gap-4">
            <label htmlFor="passowrd">Password</label>
            <input
              type="password"
              id="password"
              className="rounded bg-slate-700 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <p className="mt-6 text-sm">
          {type === "Login"
            ? "Do not have an account ? "
            : "Already have an account ? "}
          <Link
            className="italic underline transition hover:text-slate-100"
            to={`/${type === "Login" ? "signup" : "login"}`}
          >
            {type === "Login" ? "Sign up" : "Login"}
          </Link>
        </p>
        <p className="mt-6">
          <button
            className="rounded-lg bg-slate-700 px-8 py-2"
            onClick={() => submitForm(email, password)}
          >
            {type}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
