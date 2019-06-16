import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import Header from '../Header';
import Prettylink from '../Prettylink';
import Routes from '../Routes';
import Sidebar from '../Sidebar';


const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing.unit * 3,
    },
  },
  content: {
    height: '100%',
  },
  footer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 3,
    },
  },
  root: {
    height: '100%',
    paddingLeft: theme.mixins.sidebar.width,
    width: '100%',
    [theme.breakpoints.down(theme.mixins.sidebar.treshold)]: {
      paddingLeft: 0,
    },
  },
  rootBackground: {
    backgroundColor: theme.palette.background.default,
    minWidth: 320,
  },
  routes: {
    flexGrow: 1,
  },
});


class Application extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.rootBackground}>
          <Sidebar />
          <Grid container className={classes.root} direction="column" wrap="nowrap">
            <Grid item children={<Header component="header" />} />
            <Grid item className={classes.body}>
              <Grid container
                    alignItems="center"
                    className={classes.content}
                    direction="column"
                    wrap="nowrap">
                <Grid item className={classes.routes} xs={12} sm={11} md={10} lg={8} xl={6}>
                  <Routes />
                </Grid>
                <Grid item className={classes.footer}>
                  <Typography align="center" component="footer">
                    Copyright &copy; 2019&nbsp;
                    <Prettylink children="ddft.wiki contributors" href="/authors/" />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}


export default withStyles(styles)(Application);
