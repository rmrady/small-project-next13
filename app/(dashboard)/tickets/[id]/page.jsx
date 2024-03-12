
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {cookies} from 'next/headers';

export async function generateMetadata({params}) {
  
  const supabase = createServerComponentClient({cookies})
  const {data: ticket} = await supabase.from('Tickets')
    .select()
    .eq('id', params.id)
    .single()
    return{
      title: `OpenCode Helpdesk | ${ticket?.title || 'ticket not found'}`
    }
}



async function getTickets(id){
  
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.from('Tickets')
    .select()
    .eq('id', id)
    .single()

    return data
}


export default async function TicketDetails({params}) {
    const ticket = await getTickets(params.id)
  return (
    <div className="h-[50vh] mt-10">
      <h2 className="font-bold text-[20px] py-3">{ticket.title}</h2>
      <p>{ticket.body}</p>
      <p className={`pill ${ticket.priority}`}>{ticket.priority}</p>
      <p className="text-blue-400 font-bold pt-3">{ticket.user_email}</p>
    </div>
  )
}








