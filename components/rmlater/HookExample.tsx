import {useState} from "react";
import useToggle from "@/components/useToggle";

export const HookExample = () => {

    const [x, tx, setX] = useToggle(false)


    return (
        <div></div>
    )
}