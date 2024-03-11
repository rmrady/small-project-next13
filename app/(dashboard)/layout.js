import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'
import Navbar from '../components/navbar'

export default async  function DashboardLayout({children}) {

  const supabase = createServerComponentClient({cookies});
  const { data } = await supabase.auth.getSession()

  return (
    <>
        <Navbar />
        {children}
    </>
  )
}
