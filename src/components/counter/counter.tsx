import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1);
    };

    const decrement = () => {
        setCount((prevState) => prevState - 1);
    };

    return (
        <section>
            <h1>{count}</h1>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>
        </section>
    );
}
