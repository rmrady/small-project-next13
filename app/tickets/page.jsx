async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets",{
    next: {
        revalidate: 10
      }
  })

  
  return res.json();
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
          <h3 className="text-[19px] font-bold pb-6">{val.title}</h3>
          <p className="text-gray-500">{val.body.slice(0, 200)}...</p>
          <button className="bg-green-300 px-5 py-1 mt-5">see morn</button>
        </div>
      ))}
    </div>
  );
}
