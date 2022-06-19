import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UserEntry() {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'SET_USER_NAME',
            payload: name
        })

        setName('');

        history.push('/feeling');
    }
    return (

        <>
            
            <Box
                onSubmit={handleSubmit}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch'}
                }}
                autoComplete="off"
            >
                <h2>Please Enter Your Name</h2>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        type="text"
                        placeholder="required"
                        defaultValue={name}
                        onChange={evt => setName(evt.target.value)}
                    />
                    <Button variant="contained" type='submit'>Submit</Button>
                </div>
                
            </Box>

        </>
    )
}


export default UserEntry;