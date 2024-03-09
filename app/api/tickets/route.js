import {NextResponse} from "next/server"

export async function GET() {
    const res = await fetch('http://localhost:4000/tickets')
    const ticket = await res.json()

    return NextResponse.json(ticket,{
        status: 200
    })
}