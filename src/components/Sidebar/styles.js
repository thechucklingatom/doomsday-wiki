import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  body: {
    flexGrow: 1,
    flexShrink: 1,
    overflowY: 'auto',
  },
  drawerFixed: {
    padding: 0,
    width: theme.mixins.sidebar.width,
  },
  drawerTemporary: {
    padding: 0,
  },
  root: {
    height: '100%',
  },
}));
