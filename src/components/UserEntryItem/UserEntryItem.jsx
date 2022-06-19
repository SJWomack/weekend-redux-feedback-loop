

function UserEntryItem({ entry, handleDelete, handleFlag }) {
    const onDelete = () => {
        handleDelete(entry.id);
    }
    const onFlag = () => {
        handleFlag(entry.id);
    }
    return (
        <tr>
            <td>{entry.name}</td>
            <td>{entry.feeling}</td>
            <td>{entry.understanding}</td>
            <td>{entry.support}</td>
            <td>{entry.comments}</td>
            <td><button onClick={onFlag}>Flag</button></td>
            <td><button onClick={onDelete}>Delete</button></td>
        </tr>
    )
}

export default UserEntryItem