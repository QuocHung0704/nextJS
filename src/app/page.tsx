"use client"
import React from "react"
import { MyButton, MyCalendar } from "./components/style/MyButton"
import
import { useAppSelector } from "./redux"

export default function Home() {
  const carrot = useAppSelector(state => state.plant.carrot)
  const potato = useAppSelector(state => state.plant.potato)

    return (
        <div>
            <MyCalendar />
            <MyButton>
        Hung
            </MyButton>
        </div>
      
    )
}
