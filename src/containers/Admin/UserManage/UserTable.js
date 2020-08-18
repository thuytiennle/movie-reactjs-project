import { Button } from '@material-ui/core';
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
import { PropTypes } from 'prop-types';
import React from 'react';
import { TextTranslation } from '../../Language/TextTranslation';

const columns = [
  {
    id: 'taiKhoan',
    label: <TextTranslation id="container.Auth.SignIn.Account" />,
    minWidth: 170,
  },
  {
    id: 'matKhau',
    label: <TextTranslation id="container.Auth.SignIn.Password" />,
    minWidth: 100,
  },
  {
    id: 'hoTen',
    label: <TextTranslation id="container.Auth.SignUp.Name" />,
    minWidth: 170,
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
  },
  {
    id: 'soDt',
    label: <TextTranslation id="container.Auth.SignUp.Phone" />,
    minWidth: 170,
  },
  {
    id: 'maLoaiNguoiDung',
    label: <TextTranslation id="container.Auth.SignUp.UserType" />,
    minWidth: 170,
  },
];

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

export default function UserTable(props) {
  const { rows } = props;
  const classes = useStyles();
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
                <TableCell style={{ minWidth: 170 }}>
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
                      key={row.taiKhoan}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={`${row.taiKhoan}-${column.id}`}
                            align={column.align}
                          >
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      {/* Action Buttons */}
                      <TableCell>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: green[500],
                            color: '#fff',
                            marginRight: 5,
                          }}
                        >
                          <TextTranslation id="container.Admin.UserManage.ActionButton.Edit" />
                        </Button>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: red[500], color: '#fff' }}
                        >
                          <CloseIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
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

UserTable.propTypes = {
  rows: PropTypes.any,
};
