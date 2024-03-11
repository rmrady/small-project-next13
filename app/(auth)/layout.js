import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import Link from 'next/link'


export default async function AuthLayout({children}) {

  const supabase = createServerComponentClient({cookies});
  const { data } = await supabase.auth.getSession()

  if( data.session){
    redirect('/')
  }

  return (
    <>
        <nav>
        <ul className="w-[50%] flex justify-between text-[20px] font-bold text-gray-600 pt-14 pb-5">
            <li className="text-purple-400 pt-2">OpenCode Helpdesk</li>
            <li className="pt-2"><Link href="/signup">Sign up</Link></li>
            <li className="pt-2"><Link href="/login">Login</Link></li>    
        </ul>
        </nav>
        {children}
    </>
  )
}
