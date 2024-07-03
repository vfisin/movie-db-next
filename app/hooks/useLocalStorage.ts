import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error retrieving localStorage item ${key}:`, error);
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        console.log('setting value', value)
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting localStorage item ${key}:`, error);
        }
    };

    return [storedValue, setValue];
}

export default useLocalStorage;
