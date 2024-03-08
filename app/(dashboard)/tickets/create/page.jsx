
import CreateForm from "./createForm";


export default function CreateTicket() {
  return (
    <main className='flex flex-col items-center mt-20'>
        <h2 className="text-center text-[20px] font-bold text-purple-500 mb-5">Add a New Tickets</h2>
        <CreateForm/>
    </main>
  )
}
