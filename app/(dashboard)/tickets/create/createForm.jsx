"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function CreateForm() {
     const router = useRouter()

     const [title , setTitle] = useState('')
     const [body, setBody] = useState('')
     const [priority , setPriority] = useState('low')
     const [isloading , setIsloading] = useState(false)

     const handleSubmit = async(e) =>{
        e.preventDefault()
        setIsloading(true)

        const ticket = {
            title, body, priority, user_email:"rmrady758@gmail.com"
        }
        
        const res = await fetch('http://localhost:4000/tickets',{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(ticket)
        })

        if(res.status === 201){
            router.refresh()
            router.push('/tickets')
        }
     }
  return (
    <form onSubmit={handleSubmit} className="w-[40%] flex flex-col items-center bg-white rounded-lg shadow-xl shadow-neutral-950 p-4">
        <label className="w-[90%] text-center my-2">
            <p className="font-bold text-[18px] text-gray-600">title:</p>
            <input required type="text" onChange={(e)=> setTitle(e.target.value)} value={title} className="w-[100%] bg-blue-100 py-1 px-3 rounded-3xl"/>
        </label>

        <label className="w-[90%] text-center my-2" >
            <p className="font-bold text-[18px] text-gray-600">body:</p>
            <textarea required type="text" onChange={(e)=> setBody(e.target.value)} value={body} className="w-[100%] bg-blue-100 px-3 rounded-3xl"/>
        </label>
        <label className="block  text-center my-2" >
            <p className="font-bold text-[18px] text-gray-600">Priority:</p>
            <select onChange={(e)=> setPriority(e.target.value)} value={priority} className="border border-gray-200 px-10 py-1 rounded-2xl">
                <option value='low'>Low Priority</option>
                <option value='medium'>medium Priority</option>
                <option value='high'>high Priority</option>

            </select>
        </label>
        <button disabled={isloading} className="text-center font-bold
         bg-green-700 text-white rounded-xl px-6 py-1  mt-5">
            {isloading && <span>Adding...</span>}
            {!isloading && <span>Add Ticket</span>}
        </button>
    </form>
  )
}
