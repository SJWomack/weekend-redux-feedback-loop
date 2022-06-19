import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Success() {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClick = () => {
        
        dispatch({
        type: 'RESET_FEEDBACK'
      })
      history.push('/')
    }
    return(
    <>
        <h1>Feedback Submitted</h1>
        <h3>Would You Like To Submit New Feedback?</h3>
        <button onClick={handleClick}>Leave New Feedback</button>
    </>
    )
}

export default Success;
