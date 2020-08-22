import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { PropTypes } from 'prop-types';
import React, { memo } from 'react';
import { TextTranslation } from '../../Language/TextTranslation';

const columns = [
  {
    id: 'maLichChieu',
    label: (
      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.ShowTimeID" />
    ),
    minWidth: 170,
  },
  {
    id: 'tenHeThongRap',
    label: (
      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.CinemaComplex" />
    ),
    minWidth: 170,
  },
  {
    id: 'tenCumRap',
    label: (
      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.CinemaBranch" />
    ),
    minWidth: 170,
  },
  {
    id: 'ngayChieuGioChieu',
    label: (
      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.DateTimePicker" />
    ),
    minWidth: 170,
    format: (value) =>
      `${new Date(value).toLocaleDateString('en-GB')} - ${new Date(
        value,
      ).toLocaleTimeString()}`,
  },
  {
    id: 'giaVe',
    label: <TextTranslation id="container.Profile.TicketPrice" />,
    minWidth: 170,
  },
  {
    id: 'thoiLuong',
    label: <TextTranslation id="container.Profile.Movie.Duration" />,
    minWidth: 170,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
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

function ShowTimeTable(props) {
  const { movieInfo } = props;
  const rows = movieInfo.lichChieu;
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
                    key={`tableRow-${row.maLichChieu}`}
                  >
                    {columns.map((column) => {
                      // Check if nested key object
                      const value =
                        column.id === 'tenHeThongRap' ||
                        column.id === 'tenCumRap'
                          ? row.thongTinRap[column.id]
                          : row[column.id];
                      return (
                        <TableCell
                          key={`${row.maLichChieu}-${value}`}
                          align={column.align}
                        >
                          {column.format && typeof value === 'string'
                            ? column.format(value)
                            : value}
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default memo(ShowTimeTable);
ShowTimeTable.propTypes = {
  movieInfo: PropTypes.any,
};
