import  { LogInButton, LogOutButton } from "@/components/signIn"
import { getServerSession } from "next-auth"
import {options} from "@/app/options"

export default async function Login(){
    const session = await getServerSession(options)
    const user = session?.user

    return (
        <>
            <div>{JSON.stringify(user) ? `${JSON.stringify(user)}` : null}</div>
            {user ? <LogInButton /> : <LogOutButton />}
        </>
    )
}