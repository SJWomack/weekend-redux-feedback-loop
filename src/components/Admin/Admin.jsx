import UserEntryItem from '../UserEntryItem/UserEntryItem';
import {useState, useEffect} from 'react'
import axios from 'axios'
function Admin() {
    const [userEntries, setUserEntries] = useState([]);
    
    useEffect(() => {
        axios.get('/feedback')
            .then((results) => {
                console.log('get user entries success')
                setUserEntries(results.data)
            })
            .catch((err) => {
                console.log('get user entries failed', err)
            })
    }, [])


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
                    {userEntries.map(entry => <UserEntryItem entry={entry} key={entry.id} />)}
                </tbody>
            </table>
        </>
    )
}

export default Admin;