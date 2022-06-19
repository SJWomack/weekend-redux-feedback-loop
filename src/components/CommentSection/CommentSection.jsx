import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CommentSection() {

    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_COMMENT',
            payload: comment
        })

        setComment('');

        history.push('/review');
    }

    function handleBack(){
        history.push('/support')
    }
    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Let us know!
                    <input type="text"
                        placeholder="Thoughts?"
                        value={comment}
                        onChange={evt => setComment(evt.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={handleBack}>Previous Page</button>
        </>
    )
}

export default CommentSection;