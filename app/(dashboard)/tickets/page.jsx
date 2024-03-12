import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {cookies} from 'next/headers';
import Link from "next/link";


async function getTickets() {
  const supabase = createServerComponentClient({cookies})
  const {data, error} = await supabase.from('Tickets')
  .select()

  if(error){
    console.log("error");
  }

  return data
}

export default async function Page() {
  const tickets = await getTickets();
  return (
    <div className=" pt-20">
      <h2 className="text-purple-400 text-[20px] font-bold pt-10">
        Page Tickets
      </h2>
      <p className="text-gray-500">New member of the web dev</p>
      {tickets.map((val) => (
        <div key={val.id} className="bg-white p-6 mt-7">
          <Link href={`/tickets/${val.id}`}>
            <h3 className="text-[19px] font-bold pb-6">{val.title}</h3>
            <p className="text-gray-500">{val.body.slice(0, 200)}...</p>
            <button className="bg-green-300 px-5 py-1 mt-5">see morn</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
