import { MutableRefObject, useEffect, useRef } from "react";

const useScrollToView = <T extends HTMLElement>(): MutableRefObject<T | null> => {
    const ref = useRef<T>(null);

    useEffect(() => {
        if(ref.current) {
          window.scroll({
            top: ref.current.offsetTop,
            left: 0,
            behavior: 'smooth'
          })
        }
    }, []);

    return ref;
};

export { useScrollToView };


