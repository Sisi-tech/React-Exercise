import { RadioGroup, RadioOption } from './RadioGroup';
import { useState } from 'react';

const Options = () => {
    const [selected, setSelected] = useState("");
    return (
        <div className='border p-8 m-8'>
            <h1 className='text-2xl'>How did you hear about Little Lemon?</h1>
            <RadioGroup onChange={setSelected} selected={selected}>
                <RadioOption value="Social_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <button disabled={!selected} className="bg-blue-800 p-2 rounded-lg shadow-md shadow-gray-200 mt-2">Submit</button>
        </div>
    );
}

export default Options;