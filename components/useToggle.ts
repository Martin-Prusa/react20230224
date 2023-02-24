import {useState} from "react";

const useToggle = (initialValue: boolean): [boolean, (() => void), ((value: (((prevState: boolean) => boolean) | boolean)) => void)] => {
    const [shown, setShown] = useState(initialValue)

    const toggle = () => {
        setShown(!shown)
    }

    return [shown, toggle, setShown];
}

export default useToggle