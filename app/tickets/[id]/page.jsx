async function getTickets(id){
    const res = await fetch('http://localhost:4000/tickets/' +  id)
    return res.json()
}


export default async function TicketDetails({params}) {
    const ticket = await getTickets(params.id)
  return (
    <div>
        <p>
        {ticket.body}
        </p>
    </div>
  )
}



