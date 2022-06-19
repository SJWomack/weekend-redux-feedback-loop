import UserEntryItem from '../UserEntryItem/UserEntryItem';
import {useState, useEffect} from 'react'
import axios from 'axios'
function Admin() {
    const [userEntries, setUserEntries] = useState([]);
    
    useEffect(() => fetchFeedback(), [])

    const fetchFeedback = () =>{
        axios.get('/feedback')
            .then((results) => {
                console.log('get user entries success')
                setUserEntries(results.data)
            })
            .catch((err) => {
                console.log('get user entries failed', err)
            })
   }

    const handleDelete = (id) =>{
        axios.delete(`/feedback/${id}`)
            .then(() =>{
                console.log('delete success')
                fetchFeedback();
            })
            .catch((err) =>{
                console.log('delete failed', err)
            })
    }

    const handleFlag = (id, flagged) => {
        axios.put(`/feedback/${id}`, {flagged: flagged})
            .then(() => {
                console.log('flag success');
                fetchFeedback();
            })
            .catch((err) =>{
                console.log('flag failed', err);
            })
    }


    return (
        <>
            <div>
                <h1>Feedback Results</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flag</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userEntries.map(entry => <UserEntryItem entry={entry} handleFlag={handleFlag} handleDelete={handleDelete} key={entry.id} />)}
                </tbody>
            </table>
        </>
    )
}

export default Admin;