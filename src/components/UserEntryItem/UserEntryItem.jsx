import IconButton from '@mui/material/IconButton';
import FlagIcon from '@mui/icons-material/Flag'; import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


function UserEntryItem({ entry, handleDelete, handleFlag }) {

    //calls delete and flag request functions on button click
    const onDelete = () => {
        handleDelete(entry.id);
    }
    const onFlag = () => {
        handleFlag(entry.id, entry.flagged);
    }
    return (

        <TableRow
            sx={{ border: entry.flagged === true && '4px solid red' }}
        >
            <TableCell align="center"> {entry.name}</TableCell>
            <TableCell align="center">{entry.feeling}</TableCell>
            <TableCell align="center">{entry.understanding}</TableCell>
            <TableCell align="center">{entry.support}</TableCell>
            <TableCell align="center">{entry.comments}</TableCell>
            <TableCell align="center"> <IconButton aria-label="delete" onClick={onFlag}><FlagIcon /></IconButton></TableCell>
            <TableCell align="center"> <IconButton aria-label="delete" onClick={onDelete}><DeleteIcon /></IconButton></TableCell>
        </TableRow>



    )
}

export default UserEntryItem