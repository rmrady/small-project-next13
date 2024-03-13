'use client'

import { useState } from "react";
import { TiDelete } from "react-icons/ti";
export default function DleteButton({id}) {

  const [isLoding, setIsLoding] = useState(false);

  const handleClick = async () =>{
    setIsLoding(true)
    console.log('delete - id: ', id);
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
