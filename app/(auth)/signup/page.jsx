"use client"  

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react"
import { useRouter } from "next/navigation";
import AuthForm from "../AuthForm"


export default function SignUp() {
  
  const router = useRouter()
  const [formError, setFormError] = useState('');

  const handleSubmit = async(e, email, password) =>{
    e.preventDefault()
    const supabase = createClientComponentClient()
    const {error} =await supabase.auth.signUp({
      email,
      password,
      options:{
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })

    router.refresh()

    if(error){
      setFormError(error.message)
    }
    if(!error){
      router.push('/verify')
    }
  }
  return (
    <main className="w-full flex flex-col items-center">
      <h2 className="text-[20px]  text-purple-500  mb-5">Signup</h2>
      <AuthForm handleSubmit={handleSubmit}/>
      {formError && (
        <div>{formError}</div>
      )}
    </main>
  )
}
