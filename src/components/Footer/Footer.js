import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
  useTheme,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import React, { memo } from 'react';
import { TextTranslation } from '../../containers/Language/TextTranslation';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderRadius: 'unset',
    padding: '50px 0',
    backgroundColor: theme.palette.background.default,
  },
  img: {
    width: 40,
    height: 40,
  },
  partnership: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

const partnershipList = [
  {
    row: 1,
    list: [
      {
        href: 'https://www.cgv.vn/',
        img: '../../img/cgv.png',
      },
      {
        href: 'http://bhdstar.vn',
        img: '../../img/bhd.png',
      },
      {
        href: 'http://galaxycine.vn',
        img: '../../img/galaxycine.png',
      },
      {
        href: 'http://cinestar.com.vn',
        img: '../../img/cinestar.png',
      },
      {
        href: 'http://lottecinemavn.com',
        img:
          'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png',
      },
    ],
  },
  {
    row: 2,
    list: [
      {
        href: 'https://www.megagscinemas.vn',
        img: '../../img/megags.png',
      },
      {
        href: 'https://www.betacineplex.vn/',
        img: '../../img/bt.jpg',
      },
      {
        href: 'http://ddcinema.vn',
        img: '../../img/dongdacinema.png',
      },
      {
        href: 'https://touchcinema.com/',
        img: '../../img/TOUCH.png',
      },
      {
        href: 'https://cinemaxvn.com/',
        img: '../../img/cnx.jpg',
      },
    ],
  },
  {
    row: 3,
    list: [
      {
        href: 'http://starlight.vn/',
        img: '../../img/STARLIGHT.png',
      },
      {
        href: 'https://www.dcine.vn/',
        img: '../../img/dcine.png',
      },
      {
        href: 'https://zalopay.vn/',
        img: '../../img/zalopay_icon.png',
      },
      {
        href: 'https://www.payoo.vn/',
        img: '../../img/payoo.jpg',
      },
      {
        href: 'https://www.vietcombank.com.vn/',
        img: '../../img/VCB.png',
      },
    ],
  },
];

function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Paper className={classes.wrapper}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <Typography variant="h5" color="secondary">
              UNiX
            </Typography>
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <ListItemText primary="FAQs" />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={
                    <TextTranslation id="container.Footer.BrandGuidelines" />
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={
                    <TextTranslation id="container.Footer.UsageDiscussion" />
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={
                    <TextTranslation id="container.Footer.PrivacyPolicy" />
                  }
                />
              </ListItem>
              {/* container.Footer.PrivacyPolicy */}
            </List>
          </Grid>

          <Grid className={classes.partnership} item md={5} lg={4}>
            <Typography variant="h6" color="secondary">
              <TextTranslation id="container.Footer.Partnership" />
            </Typography>
            {partnershipList.map((row, rowIndex) => (
              <Box key={`row-${rowIndex}`} display="flex">
                {row.list.map((item, index) => (
                  <Button
                    key={`partnershipImg-${index}`}
                    href={item.href}
                    target="_blank"
                  >
                    <img className={classes.img} src={item.img} alt="" />
                  </Button>
                ))}
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="secondary">
              <TextTranslation id="container.Footer.Contact" />
            </Typography>
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <img
                  className={classes.img}
                  src="../../img/facebook-logo.png"
                  alt=""
                />
                <ListItemText
                  style={{ marginLeft: '10px' }}
                  primary="Facebook"
                />
              </ListItem>
              <ListItem button>
                <img
                  className={classes.img}
                  src="../../img/zalo-logo.png"
                  alt=""
                />
                <ListItemText style={{ marginLeft: '10px' }} primary="Zalo" />
              </ListItem>
              <ListItem button>
                <PhoneIcon />
                <ListItemText
                  style={{ marginLeft: '10px' }}
                  primary="028 7300 8881"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider
          style={{ backgroundColor: theme.palette.secondary.main }}
          variant="middle"
        />
        <Box marginY="20px" textAlign="center">
          <TextTranslation id="container.Footer.CopyRight" />
        </Box>
      </Container>
    </Paper>
  );
}

export default memo(Footer);
