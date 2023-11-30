import { useRef } from "react";

const SetUpFocusInput = () => {
    const formInputRef = useRef(null);
    const focusInput = () => {
        formInputRef.current.focus();
    }

    return (
        <dvi className="pt-2">
            <h1>Using useRef to access underlying DOM</h1>
            <input 
                className="px-2 mt-2 p-2 text-gray-800 mr-2" 
                type="text" 
                ref={formInputRef} 
            />
            <button 
                onClick={focusInput}
                className="bg-blue-800 p-2 rounded-lg hover:bg-gray-200 hover:text-gray-800"
            >
                Focus Input
            </button>
        </dvi>
    )
}

export default SetUpFocusInput;