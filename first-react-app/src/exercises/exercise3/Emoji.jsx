import { useState } from "react";

function Emoji() {

    //mood state, default happy
    const [mood, setMood] = useState('😀');

    //switch between happy and sad
    const handleChangeMood = () => {
        let newMood = '😀';
        if (mood === '😀') newMood = '😢';

        setMood(newMood);
    }

    return (
        <div className="Emoji componentBox">
            <h1>{mood}</h1>
            <button onClick={handleChangeMood}>Change Mood</button>
        </div>
    )
}

export default Emoji;