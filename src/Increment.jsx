import { useState } from "react";

const Increment = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }
    const reset = () => {
        setCount(0);
    }
    const plusTwo = () => {
        setCount(prevCount => prevCount + 2)
    }
    return (
        <div>
            <h1 className="text-2xl">Count: {count}</h1>
            <button
                onClick={handleIncrement}
                className="bg-blue-800 p-2 text-2xl rounded-lg m-2 shadow-md shadow-gray-300 hover:bg-gray-200 hover:text-gray-800"
            >
                Plus 1
            </button>
            <button
                className="bg-blue-800 p-2 text-2xl rounded-lg m-2 shadow-md shadow-gray-300 hover:bg-gray-200 hover:text-gray-800"
                onClick={reset}
            >
                Reset
            </button>
            <button
                className="bg-blue-800 p-2 text-2xl rounded-lg m-2 shadow-md shadow-gray-300 hover:bg-gray-200 hover:text-gray-800"
                onClick={plusTwo}
            >
                Plus 2
            </button>
        </div>
    )
}

export default Increment; 