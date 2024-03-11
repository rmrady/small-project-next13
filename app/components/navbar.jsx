
import Link from "next/link";
import Image from "next/image"
import logo from '../../public/logo.png'

export default function Navbar({user}) {
  return (
    <div>
        <ul className="w-[80%] flex justify-between text-[20px] font-bold text-gray-600 pt-14 pb-5">
            <Image src={logo} className="w-[30%]"/>
            <li className="text-purple-400 pt-2">OpenCode Helpdesk</li>
            <li className="pt-2"><Link href="/">Dashbord</Link></li>
            <li className="pt-2"><Link href="/tickets">Tickets</Link></li>
            <li className="pt-2"><Link href="/tickets/create">Create</Link></li>
            {user && <span>Hello, {user.email}</span>}
            
        </ul>
    </div>
  )
}
