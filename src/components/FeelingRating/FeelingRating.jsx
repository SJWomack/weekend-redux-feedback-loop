import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function FeelingRating() {

    const [feelingLevel, setFeelingLevel] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    //updates global state for feeling rating and moves to next screen
    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_FEELING_RATING',
            payload: feelingLevel
        })

        setFeelingLevel('');

        history.push('/understanding');
    }
    //moves to previous screen
    function handleBack() {
        history.push('/')
    }

    return (
        <>

            <Box
                onSubmit={handleSubmit}
                component="form"
                sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}
                autoComplete="off"
            >
                <h2>How Are You Feeling Today?</h2>

                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">1-5</InputLabel>
                        <Select

                            required
                            value={feelingLevel}
                            label="feeling"
                            onChange={evt => setFeelingLevel(evt.target.value)}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>

                        </Select>
                    </FormControl>

                    <Button variant="contained" type='submit'>Submit</Button>
                </div>

                <Button variant="contained" onClick={handleBack}>Previous Page</Button>
            </Box>






        </>
    )
}


export default FeelingRating;