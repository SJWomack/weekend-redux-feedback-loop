import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function SupportRating() {

    const [supportLevel, setSupportLevel] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_SUPPORT_RATING',
            payload: supportLevel
        })

        setSupportLevel('');

        history.push('/comment');
    }

    function handleBack(){
        history.push('/understanding')
    }
    return (
        <>
            <h1>How supported are you feeling?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Let us know!
                    <input type="number"
                        required
                        placeholder="Required"
                        value={supportLevel}
                        onChange={evt => setSupportLevel(evt.target.value)}
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

export default SupportRating;