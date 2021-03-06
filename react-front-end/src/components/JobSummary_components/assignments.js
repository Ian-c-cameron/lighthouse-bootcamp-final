import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const columns = [
  { id: 'name', label: 'Name', minWidth: 50, maxWidth: 100 },
  { id: 'start_date_time', label: 'Start Date/Time', minWidth: 10, maxWidth: 30, align: 'center' },
  {
    id: 'end_date_time',
    label: 'End Date/Time',
    minWidth: 10,
    maxWidth: 30,
    align: 'center',
  }
];

function createData(name, start_date_time, end_date_time) {
  return { name, start_date_time, end_date_time};
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    maxHeight: 250,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Assignments(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };


  const assignmentsArray = props.job.assignments;
  const rows = assignmentsArray.map((obj) => {
    const starts = new Date(obj.starts)
    const startsString = starts.toLocaleDateString() + " " + starts.toLocaleTimeString();
    const ends = new Date(obj.ends)
    const endsString = ends.toLocaleDateString() + " " + ends.toLocaleTimeString();
    return createData(`${obj.first_name} ${obj.last_name}`, startsString, endsString)
  });

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Assignments" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table size="small" stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rIndex) => {
                  return (
                    
                    <TableRow hover role="checkbox" tabIndex={-1} key={rIndex}>
                      {columns.map((column, cIndex) => { 
                        const value = row[column.id];
                        return (
                          <TableCell key={`${cIndex} ${rIndex}`} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>

            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Collapse>  
    </List>
  );
}
