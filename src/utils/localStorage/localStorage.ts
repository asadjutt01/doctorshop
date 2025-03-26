export const setItem = <T>(key: string, value: T): void => {
    try {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error(`Error setting item in local storage: ${error}`);
    }
};

export const getItem = <T>(key: string): T | null => {
    try {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item) as T;
        }
        return null;
    } catch (error) {
        console.error(`Error getting item from local storage: ${error}`);
        return null;
    }
};

export const removeItem = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing item from local storage: ${error}`);
    }
};

export const clearAll = (): void => {
    try {
        localStorage.clear();
    } catch (error) {
        console.error(`Error clearing local storage: ${error}`);
    }
};

export const getFirstItem = <T>(key: string): T | null => {
    const items = getItem<T[]>(key);
    if (Array.isArray(items) && items.length > 0) {
        return items[0];
    }
    return null;
};

export const getFirstValueFromLocalStorage = (key: string): number | null => {
    const list = getItem<Array<{ value: number; label: string }>>(key); 
    if (Array.isArray(list) && list.length > 0) {
        return list[0].value !== undefined ? list[0].value : null;
    }
    return null;
};