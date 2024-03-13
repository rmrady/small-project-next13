import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE(_, {params}){
    const supabase = createRouteHandlerClient({cookies})

    const {error} =await supabase.from('Tickets')
        .delete()
        .eq('id', params.id)

    return NextResponse.json({error})
}