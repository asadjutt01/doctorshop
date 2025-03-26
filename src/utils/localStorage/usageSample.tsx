// src/components/ExampleComponent.tsx
import React, { useEffect, useState } from 'react';
import { setItem, getItem, removeItem, clearAll } from './localStorage';

// Define a type for the object
interface User {
    id: number;
    name: string;
    email: string;
}

const ExampleComponent: React.FC = () => {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        // Set an item
        setItem('exampleKey', 'exampleValue');

        // Get an item
        const storedData = getItem<string>('exampleKey');
        setData(storedData);

        // Remove an item
        removeItem('exampleKey');

        // Clear all items
        clearAll();
    }, []);



    // Store the object
    const user: User = { id: 1, name: 'John Doe', email: 'john@example.com' };
    setItem<User>('user', user);

    // Retrieve the object
    const storedUser = getItem<User>('user');
    console.log(storedUser);


    return (
        <div>
            <p>Stored Data: {data}</p>
        </div>
    );
};

export default ExampleComponent;
