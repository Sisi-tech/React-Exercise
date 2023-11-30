import { useState, useEffect, useRef } from 'react';

const CustomHook = () => {
    const [day, setDay] = useState("Monday");
    const prevDay = usePrevious(day);
    const getNextDay = () => {
        if (day === "Monday") {
            setDay("Tuesday")
        } else if (day === "Tuesday") {
            setDay("Wednesday")
        } else if (day === 'Wednesday') {
            setDay("Thursday")
        } else if (day === "Thursday") {
            setDay("Friday")
        } else if (day === "Friday") {
            setDay("Monday")
        }
    }
    return (
        <div>
            <h1 className='text-2xl'>
                Today is: {day} <br />
                {
                    prevDay && (
                        <span>Previous work day was: {prevDay}</span>
                    )
                }
            </h1>
            <button 
                onClick={getNextDay}
                className="bg-blue-800 p-2 rounded-lg shadow-md shadow-gray-300 mt-2 text-2xl hover:bg-gray-200 hover:text-gray-800"
            >
                Get next day
            </button>
        </div>
    );
}

function usePrevious(val) {
    const ref = useRef();
    useEffect(() => {
        ref.current = val;
    }, [val]);
    return ref.current;
}

export default CustomHook;