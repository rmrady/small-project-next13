"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react"
import { useRouter } from "next/navigation";
import AuthForm from "../AuthForm";

export default function Login() {

  const router = useRouter()
  const [formError, setFormError] = useState('');

  const handleSubmit = async(e, email, password) =>{
    e.preventDefault()
    setFormError('')
    
    const supabase = createClientComponentClient()
    const {error} =await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error){
      setFormError(error.message)
    }
    if(!error){
      router.push('/')
    }
  }

  return (
    <main className="w-full flex flex-col items-center">
      <h2 className="text-[20px]  text-purple-500 mb-5">Login</h2>
      <AuthForm handleSubmit={handleSubmit}/>

      {formError && (
        <div className="bg-red-200 p-2 border border-red-700 mt-3">{formError}</div>
      )}
    </main>
  )
}
