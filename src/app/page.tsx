"use client"
import React from "react"
import { FormExample } from "./FormExample"
import LoginModal from "./FormExample/LoginModal"
import SignUpModal from "./FormExample/SignUpModal"

//import { useAppDispatch, setCarrot } from "./redux"

export default function Home() {
    return (
        <div>
            <FormExample />

            <div>
                <LoginModal />
                <SignUpModal />
            </div>
        </div>
    )
}