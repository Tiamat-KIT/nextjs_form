import  { LogInButton, LogOutButton } from "@/components/signIn"
import { getServerSession } from "next-auth"
import {options} from "@/app/options"
import CalendarComp from "@/components/Calendar"

export default async function Login(){
    const session = await getServerSession(options)
    const user = session?.user

    return (
        <>
            <div>{JSON.stringify(user) ? `${JSON.stringify(user)}` : null}</div>
            {user ? <LogOutButton /> : <LogInButton />}

            <CalendarComp />
        </>
    )
}