import React, { useState }  from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import AccountProfile from './AccountProfile';
import Posts from './Post';
import Rating from './Rating';

const useStyles = makeStyles((theme) => ({
  tab: {
    color: theme.palette.text.primary,
  }
}));

function Profile() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };


  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }


  return (
    <Container maxWidth="lg">
      
      <Grid container spacing={4}>
        
        <Grid item md={4} xs={12}>
          <AccountProfile />
        </Grid>
        
        <Grid item md={8} xs={12}>
          
          <Tabs value={tab} onChange={handleChange}>
            <Tab className={classes.tab} label="Post" />
            <Tab className={classes.tab} label="Avaliações" />
          </Tabs>
          
          <TabPanel value={tab} index={0}>
            <Posts />
          </TabPanel>
          
          <TabPanel value={tab} index={1}>
            <Rating />
          </TabPanel>
        
        </Grid>
      
      </Grid>
    
    </Container>
  )
}



export default Profile;