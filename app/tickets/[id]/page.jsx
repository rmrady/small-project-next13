async function getTickets(id){
    const res = await fetch('http://localhost:4000/tickets/' +  id,{
      next: {
        revalidate: 10
      }
    })
    return res.json()
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








