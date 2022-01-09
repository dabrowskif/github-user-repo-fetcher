import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBar: {
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    marginTop: '2px',
    paddingLeft: '25px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
}));
