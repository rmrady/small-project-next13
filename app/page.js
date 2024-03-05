import Link from 'next/link'

export default function Home() {
  return (
    <main className=" border-t border-gray-400 px-10">
      <h2 className="text-purple-400 text-[20px] font-bold pt-10">Dashboard</h2>
      <p className="text-gray-500 ">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins</p>
      
      <div className="text-center">
        <button className="text-white bg-purple-400 text-center px-4 py-1 mt-14"><Link href="/tickets">View Tickets</Link></button>
      </div>

      <h3 className="text-purple-400 text-[20px] font-bold pt-10">Company Updates</h3>
      <div className="bg-white p-6 mt-7">
        <h3 className="text-[19px] font-bold pb-6">New member of the web dev team..</h3>
        <p className="text-gray-500" >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
      </div>
      <div className="bg-white p-6 mt-7">
        <h3 className="text-[19px] font-bold pb-6">New webside livel</h3>
        <p className="text-gray-500" >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use</p>
      </div>
      
    
    </main>
  )
}
