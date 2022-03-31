import { useLayoutEffect, useState } from "react";

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue)
    ]
}

export const useWindowSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const resize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useLayoutEffect(() => {
        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, []);

    return [width, height];
}

export const useMousePosition = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setPosition = ({ x, y }) => {
        setX(x);
        setY(y);
    };

    useLayoutEffect(() => {
        window.addEventListener("mousemove", setPosition);
        return () => window.removeEventListener("mouseover", setPosition);
    }, []);

    return [x, y];
}