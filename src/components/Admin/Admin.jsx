import UserEntryItem from "../UserEntryItem/UserEntryItem";

function Admin({ userEntries }) {
    return (<>
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
                {userEntries.map(entry => <UserEntryItem entry={entry}  key={entry.id} />)}
            </tbody>
        </table>
    </>
    )
}

export default Admin;