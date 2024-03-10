"use client"
import AuthForm from "../AuthForm";

export default function Login() {
  const handleSubmit = async(e, email, password) =>{
    e.preventDefault()
    console.log('user login', email, password);
  }

  return (
    <main className="w-full flex flex-col items-center">
      <h2 className="text-[20px]  text-purple-500 mb-5">Login</h2>
      <AuthForm handleSubmit={handleSubmit}/>
    </main>
  )
}
