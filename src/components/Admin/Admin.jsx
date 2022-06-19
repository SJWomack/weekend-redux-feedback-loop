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
                <Table sx={{ minWidth: 650, backgroundColor: 'beige', fontWeight: 'bold'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Feeling</TableCell>
                            <TableCell align="right">Understanding</TableCell>
                            <TableCell align="right">Support</TableCell>
                            <TableCell align="right">Comments</TableCell>
                            <TableCell align="right">Flag</TableCell>
                            <TableCell align="right">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { userEntries.map(entry => <UserEntryItem entry={entry} handleFlag={handleFlag} handleDelete={handleDelete} key={entry.id} />) }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Admin;