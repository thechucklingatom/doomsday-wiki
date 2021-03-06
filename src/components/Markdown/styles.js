import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  barf: {
    ...theme.mixins.barf(),
  },
  code: {
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    overflowY: 'auto',
    padding: theme.spacing(1),
  },
  divider: {
    marginBottom: '1em',
    marginTop: '1em',
  },
  image: {
    maxWidth: '100%',
  },
  pile: {
    '@global img': {
      alignSelf: 'center',
      borderRadius: theme.shape.borderRadius,
      width: '19%',
    },
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
