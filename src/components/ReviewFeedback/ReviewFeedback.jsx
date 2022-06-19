import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { ListItem } from '@mui/material';

function ReviewFeedback() {
    const feedback = useSelector(store => store.userResponse);
    const history = useHistory();

    function handleSubmitFeedback() {
        axios.post('/feedback', feedback)
            .then(() => {
                console.log('feedback sent');
                history.push('/success');

            })
            .catch((err) => console.log('feedback not sent', err))
    }

    function handleBack() {
        history.push('/comment')
    }

    return (

        <>
            <h1>Review Your Feedback</h1>
            <ul>
                <ListItem>Name: {feedback.name}</ListItem>
                <li>Feeling: {feedback.feeling}</li>
                <li>Understanding: {feedback.understanding}</li>
                <li>Support: {feedback.support}</li>
                <li>Comments: {feedback.comment}</li>

            </ul>

            <button onClick={handleSubmitFeedback}>Submit Feedback</button>
            <button onClick={handleBack}>Previous Page</button>

        </>
    )
}

export default ReviewFeedback;