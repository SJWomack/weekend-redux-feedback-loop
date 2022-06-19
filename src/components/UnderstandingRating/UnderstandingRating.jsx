import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function UnderstandingRating() {

    const [understandingLevel, setUnderstandingLevel] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_UNDERSTANDING_RATING',
            payload: understandingLevel
        })

        setUnderstandingLevel('');

        history.push('/support');
    }

    function handleBack(){
        history.push('/feeling')
    }
    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Let us know!
                    <input type="number"
                        required
                        placeholder="Required"
                        value={understandingLevel}
                        onChange={evt => setUnderstandingLevel(evt.target.value)}
                        max={5}
                        min={1}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={handleBack}>Previous Page</button>

        </>
    )
}

export default UnderstandingRating;