import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React, { memo, useCallback } from 'react';
import { TextTranslation } from '../../Language/TextTranslation';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    height: 378,
    overflowY: 'scroll',
    // Customize scrollbar
    '&::-webkit-scrollbar': {
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

function ProfileBookingHistory(props) {
  const classes = useStyle();
  const { booking } = props;

  const renderHistoryItem = useCallback(() => {
    if (booking && booking.length > 0) {
      return booking.map((item) => {
        return (
          <Card key={`booking-history-${item.maVe}`}>
            <CardContent>
              <Grid container>
                <Grid item sm={6} xs={12}>
                  <Typography variant="subtitle1" color="secondary">
                    {item.tenPhim}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {/* Get cinema name from first element of list of seat */}
                    {Object.keys(item.danhSachGhe[0]).length > 0 &&
                      `${item.danhSachGhe[0].tenHeThongRap} - ${item.danhSachGhe[0].tenCumRap}`}
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Typography variant="body2" component="p">
                    <TextTranslation id="container.Profile.BookingDate" />:
                    {/* British English uses day-month-year order */}
                    {` ${new Date(item.ngayDat).toLocaleDateString('en-GB')}`}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <TextTranslation id="container.CinemaBookingRoom.Seat" />:
                    {/* Get seat name in list of seat */}
                    {item.danhSachGhe &&
                      item.danhSachGhe.length > 0 &&
                      item.danhSachGhe.map((seat, index) =>
                        index === 0 ? ` ${seat.tenGhe}` : `, ${seat.tenGhe}`,
                      )}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <TextTranslation id="container.Profile.TicketPrice" />
                    {`: ${item.giaVe} vnd`}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <TextTranslation id="container.Profile.Total" />
                    {/* Total is ticket price * length of seat list */}
                    {item.danhSachGhe &&
                      item.danhSachGhe.length > 0 &&
                      `: ${item.danhSachGhe.length * item.giaVe} vnd`}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      });
    }
  }, [booking]);
  return <Box className={classes.wrapper}>{renderHistoryItem()}</Box>;
}

export default memo(ProfileBookingHistory);

ProfileBookingHistory.propTypes = {
  booking: PropTypes.any,
};
