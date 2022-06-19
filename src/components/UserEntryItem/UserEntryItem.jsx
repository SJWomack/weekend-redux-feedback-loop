import IconButton from '@mui/material/IconButton';
import FlagIcon from '@mui/icons-material/Flag';import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


function UserEntryItem({ entry, handleDelete, handleFlag }) {
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
            <TableCell component="th" scope="row">
                {entry.name}
            </TableCell>
            <TableCell align="right">{entry.feeling}</TableCell>
            <TableCell align="right">{entry.understanding}</TableCell>
            <TableCell align="right">{entry.support}</TableCell>
            <TableCell align="right">{entry.comments}</TableCell>
            <TableCell align="right"> <IconButton aria-label="delete" onClick={onFlag}><FlagIcon /></IconButton></TableCell>
            <TableCell align="right"> <IconButton aria-label="delete" onClick={onDelete}><DeleteIcon /></IconButton></TableCell>
        </TableRow>



    )
}

export default UserEntryItem