'use client'

import { useState } from "react"


export default function AuthForm({handleSubmit}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <form onSubmit={(e)=> handleSubmit(e, email, password)} className="w-[40%] bg-white rounded-lg p-5">
        <label className="w-full">
            <span className="text-[20px] font-bold ">Email:</span>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} required className="w-full py-1 bg-slate-200 mb-5"/>
        </label>

        <label className="w-full">
            <span className="text-[20px] font-bold ">password:</span>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} required className="w-full bg-slate-200 py-1 mb-5"/>
        </label>

        <button className="text-[18px] bg-pink-800 text-white rounded-xl px-7 py-1">submit</button>
    </form>
  )
}
