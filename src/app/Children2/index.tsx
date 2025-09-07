"use client"
import React, { createContext } from "react"
import { useAppSelector } from "../redux"
import { Children1 } from "../Children1"

export interface CountData {
    count: number
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
}
export const CountContext = createContext<CountData| null>(null)

export const Children2 = () => {
    const cuHanh = useAppSelector(state => state.plant.onion)
    return (
        <div>
            {cuHanh}
            <Children1 />
        </div>
    )
}

