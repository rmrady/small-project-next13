'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";


export default function DleteButton({id}) {

  const [isLoding, setIsLoding] = useState(false);
  const router = useRouter()

  const handleClick = async () =>{
    setIsLoding(true)
    
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`,{
      method: 'DELETE'
    })

    const json = await res.json()

    if(json.error){
      console.log('error');
      setIsLoding(false)

    }

    if(!json.error){
      router.refresh()
      router.push('/tickets')
      
    }
  }

  return (
    <button className="flex bg-red-200 text-white text-[18px] font-bold px-5 py-1" onClick={handleClick} disabled={isLoding }>
      {isLoding && (
        <>
          <TiDelete />
          Deleting...
        </>
      )}

      {!isLoding && (
        <>
          <TiDelete className="bg-black m-1" />
          Delete ticket
        </>
      )}
    </button>
  );
}
