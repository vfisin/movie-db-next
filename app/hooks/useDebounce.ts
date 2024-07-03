import { useCallback, useRef } from "react";

const useDebounce = (callback: (...args: any[]) => void, delay: number = 200) => {
    const timeoutRef = useRef<number | undefined>();

    const debouncedCallback = useCallback((...args: any[]) => {
        if (timeoutRef.current !== undefined) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);

    return debouncedCallback;
};

export default useDebounce;
