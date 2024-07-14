import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="flex mt-16 justify-center">
      <div className="p-12 bg-slate-800 rounded-lg">
        <h1 className="font-bold text-xl mb-8">Login Your Account</h1>
        <form className="flex flex-col gap-6">
          <div className="flex gap-4 justify-between">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="p-2 rounded bg-slate-700" />
          </div>
          <div className="flex gap-4 justify-between">
            <label htmlFor="passowrd">Password</label>
            <input type="passowrd" id="password" className="p-2 rounded bg-slate-700" />
          </div>
        </form>
        <p className="mt-6 text-sm">Do not have an account ? <Link className="italic underline hover:text-slate-100 transition" to='/signup'>Sign up</Link></p>
        <p className="mt-6"><button className="px-8 py-2 bg-slate-700 rounded-lg">Login</button></p>
      </div>
    </div>
  )
}

export default LoginPage