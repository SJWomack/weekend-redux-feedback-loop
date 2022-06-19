import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';

function ReviewFeedback ({submitFeedback}) {
    const feedback = useSelector(store => store.userResponse);
    const history = useHistory();

    function handleClick(){
        submitFeedback();
        history.push('/success');
    }

    function handleBack(){
        history.push('/comment')
    }
    return (

        <>
        <h1>Review Your Feedback</h1>
        <ul>
            <li>Name: {feedback.name}</li>
            <li>Feeling: {feedback.feeling}</li>
            <li>Understanding: {feedback.understanding}</li>
            <li>Support: {feedback.support}</li>
            <li>Comments: {feedback.comment}</li>

        </ul>

        <button onClick={handleClick}>Submit Feedback</button>
        <button onClick={handleBack}>Previous Page</button>

        </>
    )
}

export default ReviewFeedback;