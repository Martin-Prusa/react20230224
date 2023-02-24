import {useState} from "react";

export const HookExample = () => {

    const useToggle = (initialValue: boolean) => {
        const [shown, setShown] = useState(initialValue)

        const toggle = () => {
            setShown(!shown)
        }

        return [shown, toggle, setShown];
    }


    return (
        <div></div>
    )
}