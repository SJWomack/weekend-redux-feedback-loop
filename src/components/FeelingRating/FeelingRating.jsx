import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function FeelingRating() {

    const [feelingLevel, setFeelingLevel] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_FEELING_RATING',
            payload: feelingLevel
        })

        setFeelingLevel('');

        history.push('/understanding');
    }
    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Let us know!
                    <input type="number"
                        required
                        placeholder="Required"
                        value={feelingLevel}
                        onChange={evt => setFeelingLevel(evt.target.value)}
                        max={5}
                        min={1}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}


export default FeelingRating;