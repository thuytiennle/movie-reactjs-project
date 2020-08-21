import { Box, Button } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CloseIcon from '@material-ui/icons/Close';
import TheatersIcon from '@material-ui/icons/Theaters';
import { useTheme } from '@material-ui/styles';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { TextTranslation } from '../../Language/TextTranslation';
import {
  actFetchDeleteMovieRequest,
  actOpenMovieDialog,
  actOpenShowTimeDialog,
} from './module/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  wrapper: {
    marginLeft: 0,
    backgroundColor: theme.palette.titleBar.main,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240,
    },
  },
  container: {
    maxHeight: 480,
    // Customize scrollbar
    '&::-webkit-scrollbar': {
      height: 4,
      width: 4,
      backgroundColor: '#e8e3e3',
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 20,
      backgroundColor: theme.palette.secondary.main,
      outline: '1px solid slategrey',
    },
  },
}));

const columns = [
  {
    id: 'maPhim',
    label: <TextTranslation id="container.Admin.MovieManage.MovieId" />,
    minWidth: 100,
  },
  {
    id: 'tenPhim',
    label: <TextTranslation id="container.Admin.MovieManage.MovieName" />,
    minWidth: 170,
  },
  {
    id: 'hinhAnh',
    label: <TextTranslation id="container.Admin.MovieManage.MovieImage" />,
    minWidth: 100,
    format: (value) => (
      <img style={{ width: 80, height: 80 }} src={value} alt="" />
    ),
  },
  {
    id: 'moTa',
    label: (
      <TextTranslation id="container.Admin.MovieManage.MovieDescription" />
    ),
    minWidth: 200,
  },
  {
    id: 'maNhom',
    label: <TextTranslation id="container.Admin.MovieManage.MovieGroupId" />,
    minWidth: 170,
  },
  {
    id: 'ngayKhoiChieu',
    label: <TextTranslation id="container.Admin.MovieManage.ReleaseDate" />,
    minWidth: 100,
    format: (value) => new Date(value).toLocaleDateString('en-GB'),
  },
];

export default function MovieTable(props) {
  const { rows } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
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
                {/* Action Buttons */}
                <TableCell style={{ minWidth: 200 }}>
                  <TextTranslation id="container.Admin.UserManage.ActionButton" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.maPhim}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={`${row.maPhim}-${column.id}`}
                            align={column.align}
                          >
                            {column.format && typeof value === 'string'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      {/* Action Buttons */}
                      <TableCell>
                        <Button
                          variant="outlined"
                          style={{
                            color: theme.palette.text,
                            margin: '5px 0',
                          }}
                          onClick={() => dispatch(actOpenShowTimeDialog())}
                        >
                          <TheatersIcon />
                          <TextTranslation id="components.Navbar.ShowTime" />
                        </Button>
                        <Box display="flex" width="100%">
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: green[500],
                              color: '#fff',
                              marginRight: 5,
                            }}
                            onClick={() => dispatch(actOpenMovieDialog(row))}
                          >
                            <TextTranslation id="container.Admin.UserManage.ActionButton.Edit" />
                          </Button>
                          <Button
                            variant="contained"
                            style={{ backgroundColor: red[500], color: '#fff' }}
                            onClick={() => {
                              dispatch(actFetchDeleteMovieRequest(row.maPhim));
                            }}
                          >
                            <CloseIcon />
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 30]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

MovieTable.propTypes = {
  rows: PropTypes.any,
};
