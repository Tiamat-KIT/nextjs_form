"use client"
import {signIn,signOut} from "next-auth/react"
import { Button } from "./ui/button"

export function LogInButton(){
    return <Button onClick={() => signIn()}>Login</Button>

}

export function LogOutButton(){
    return <Button onClick={() => signOut()}>Logout</Button>
}



