import Link from 'next/link'
export default function AuthLayout({children}) {
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
