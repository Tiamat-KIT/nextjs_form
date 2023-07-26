"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarComp(){ 
    const [day,setDay] = useState<Date | undefined>(new Date())

    return (
        <>
            <h2>Today's</h2>
            <Calendar 
                mode="single"
                selected={day}
                onSelect={setDay}
                className="rounded-md border"
            />
        </>
    )
}