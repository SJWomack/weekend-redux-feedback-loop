import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

function UserEntry () {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type:'SET_USER_NAME',
            payload: name
        })

        setName('');

        history.push('/feeling');
    }
    return (
    
        <>
        <h2>Please Enter Your Name</h2>
        <form onSubmit={handleSubmit}>
            <label >
                Name:
                <input type="text"
                required placeholder="required"
                value={name}
                onChange={evt => setName(evt.target.value)}
                />
            </label>
            <input type="submit" value="Submit"  />
        </form>
        </>
    )
}


export default UserEntry;