import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import {options} from "@/app/options"

export async function GET(){
    const session = await getServerSession(options)
    return NextResponse.json({message: "ok"})
} 