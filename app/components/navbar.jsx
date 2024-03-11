
import Link from "next/link";
import Image from "next/image"
import logo from '../../public/logo.png'
import LogoutButton from "./logoutButton";

export default function Navbar({user}) {
  return (
    <div>
        <ul className="w-[100%] flex justify-between text-[20px] font-bold text-gray-600 pt-14 pb-5">
            <Image src={logo} className="w-[10%]"/>
            <li className="text-purple-400 pt-2">OpenCode Helpdesk</li>
            <li className="pt-2"><Link href="/">Dashbord</Link></li>
            <li className="pt-2"><Link href="/tickets">Tickets</Link></li>
            <li className="pt-2 "><Link href="/tickets/create">Create</Link></li>
            
            <li className="text-[7px] bg-white rounded-2xl text-green-700 mt-3  p-3">
              {user && <span>Hello, {user.email}</span>}
            </li>
            
            
            <li className="ml-14 mt-3">
              <LogoutButton />
            </li>
            
        </ul>
    </div>
  )
}
