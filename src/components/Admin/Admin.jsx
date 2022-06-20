import UserEntryItem from '../UserEntryItem/UserEntryItem';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Admin() {
    const [userEntries, setUserEntries] = useState([]);

    useEffect(() => fetchFeedback(), [])
    //fetches all feedback data
    const fetchFeedback = () => {
        axios.get('/feedback')
            .then((results) => {
                console.log('get user entries success')
                setUserEntries(results.data)
            })
            .catch((err) => {
                console.log('get user entries failed', err)
            })
    }
    //handles deletion of specific user feedback
    const handleDelete = (id) => {
        axios.delete(`/feedback/${id}`)
            .then(() => {
                console.log('delete success')
                fetchFeedback();
            })
            .catch((err) => {
                console.log('delete failed', err)
            })
    }
    //handles updating flagged status for specified user feedback
    const handleFlag = (id, flagged) => {
        axios.put(`/feedback/${id}`, { flagged: flagged })
            .then(() => {
                console.log('flag success');
                fetchFeedback();
            })
            .catch((err) => {
                console.log('flag failed', err);
            })
    }


    return (
        <>
            <div>
                <h1>Feedback Results</h1>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, margin: '0 auto', maxWidth: '90%', backgroundColor: 'beige', fontWeight: 'bold' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Feeling</TableCell>
                            <TableCell align="center">Understanding</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="center">Flag</TableCell>
                            <TableCell align="center">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* loops through user feedback data and renders each row as a table row on dom */}
                        {userEntries.map(entry => <UserEntryItem entry={entry} handleFlag={handleFlag} handleDelete={handleDelete} key={entry.id} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Admin;