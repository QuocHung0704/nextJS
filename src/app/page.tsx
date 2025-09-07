"use client"
import { Button, Input } from "@heroui/react"
import { div } from "framer-motion/client"
import React, { useEffect, useRef, useState } from "react"
import { Children2 } from "./Children2"


export default function Home() {
    // //useState nó thay đổi UI trên trình duyệt re-render
    // //tức là cái hàm nó được gọi lại để re-render kết quả mới
    // const [text, setText] = useState("")

    // //useRef thì nó thay đổi giá trị và nó không re-render lại component
    // // const [textRef, setTextRef] = useRef("")
    // //khi ref thay đổi, nó không re-render
    // const divRef = useRef<HTMLDivElement | null>(null)
    // const preventFirstRenderRef = useRef(false)
    // const [count, setCount] = useState(0)
    // useEffect(() => {
    //     //Tức là lần đầu tiên vào web 
    //     //check xem cái prevent, nếu nó bằng false thì dừng
    //     //useRef để khiến cho useEffect nó không hoạt động trong lần đầu tiên render
    //     if (!preventFirstRenderRef.current) {
    //         preventFirstRenderRef.current = true
    //         return
    //     }
    //     if (divRef.current) {
    //         divRef.current.innerHTML = "Hello world"
    //     }
    // }, [count])

    // //nếu giá trị trong dependency array thay đổi, hàm sẽ được gọi lại
    return (
        <div>
            {/* <div ref={divRef}></div>
            <Button onPress={() => setCount((prev) => prev + 1)}>Click me</Button> */}
            <Children2 />
        </div>

    )
}
