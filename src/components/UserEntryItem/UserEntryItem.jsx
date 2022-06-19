

function UserEntryItem({ entry }) {

    return (
        <tr>
            <td>{entry.name}</td>
            <td>{entry.feeling}</td>
            <td>{entry.understanding}</td>
            <td>{entry.support}</td>
            <td>{entry.comments}</td>
            <td><button>Flag</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default UserEntryItem