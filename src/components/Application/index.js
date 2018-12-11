import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import Header from '../Header';
import Prettylink from '../Prettylink';
import Routes from '../Routes';
import Sidebar from '../Sidebar';
import { ThemeConsumer } from '../../contexts/Theme';


const sidebarTreshold = 'sm';
const sidebarWidth = 300;
const styles = theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {padding: theme.spacing.unit * 2},
    [theme.breakpoints.up('md')]: {padding: theme.spacing.unit * 3},
  },
  root: {
    height: '100%',
    paddingLeft: sidebarWidth,
    width: '100%',
    [theme.breakpoints.down(sidebarTreshold)]: {
      paddingLeft: 0,
    },
  },
  rootBackground: {
    backgroundColor: theme.palette.background.default,
    minWidth: 320,
  },
  sidebar: {
    width: sidebarWidth,
  },
});


class Application extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <ThemeConsumer>
        {theme => (
          <MuiThemeProvider theme={theme.state.current}>
            <BrowserRouter>
              <div className={classes.rootBackground}>
                <Sidebar sidebarProps={{classes: {paper: classes.sidebar}}} sidebarTreshold={sidebarTreshold} />
                <Grid container className={classes.root} direction="column" wrap="nowrap">
                  <Grid item children={<Header component="header" />} />
                  <Grid item className={classes.body}>
                    <Grid container justify="center">
                      <Grid item xs={12} md={10} lg={8} xl={6}>
                        <Routes />
                        <Typography align="center" component="footer">
                          Copyright &copy; 2018
                          <Prettylink children="ddft.wiki contributors" href="/authors/" />
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
        )}
      </ThemeConsumer>
    );
  }
}


export default withStyles(styles)(Application);
