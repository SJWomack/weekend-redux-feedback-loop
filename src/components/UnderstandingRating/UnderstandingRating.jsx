import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function UnderstandingRating() {

    const [understandingLevel, setUnderstandingLevel] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    //gathers understanding rating and updates global state in user feedback
    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_UNDERSTANDING_RATING',
            payload: understandingLevel
        })

        setUnderstandingLevel('');

        history.push('/support');
    }

    function handleBack() {
        history.push('/feeling')
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
                <h2>How Well Are You Understanding The Content?</h2>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">1-5</InputLabel>
                        <Select
                            required
                            value={understandingLevel}
                            label="Understanding"
                            onChange={evt => setUnderstandingLevel(evt.target.value)}
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

export default UnderstandingRating;