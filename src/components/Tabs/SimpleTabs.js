import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import TabPanel from './TabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 'fit-content',
    margin: '0 auto',
    color: theme.palette.text,
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function SimpleTabs(props) {
  const { tabs } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper position="static" className={classes.paper}>
        <Tabs
          classes={{ indicator: classes.indicator }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {tabs.map((prop, key) => {
            let icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              };
            }
            return (
              <Tab
                key={key}
                label={prop.tabName}
                {...a11yProps(key)}
                {...icon}
              />
            );
          })}
        </Tabs>
      </Paper>
      {tabs.map((prop, key) => {
        return (
          <TabPanel key={key} value={value} index={key}>
            {prop.tabContent}
          </TabPanel>
        );
      })}
    </div>
  );
}

SimpleTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.node.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired,
    }),
  ),
};

export default memo(SimpleTabs);
