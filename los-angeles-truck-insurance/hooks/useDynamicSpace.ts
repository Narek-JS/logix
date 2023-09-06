import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

export function useDynamicSpace (
    minSpace: number,
    maxSpace: number,
    minWidth: number,
    maxWidth: number
): number {
    const { width } = useWindowSize();
    const [ space, setSpace ] = useState<number>(minSpace);

    useEffect(() => {
        const newSpace = maxSpace - ((Number(width) - minWidth) / (maxWidth - minWidth)) * (maxSpace - minSpace);
        if(Boolean(newSpace < minSpace && newSpace > maxSpace)) {
            setSpace(newSpace);
        };
    }, [width]);

    return space;
};