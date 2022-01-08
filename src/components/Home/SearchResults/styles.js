import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '5px',
    textAlign: 'center',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  resultGrid: {
    padding: '10px',
  },
  resultName: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0px',
  },
  resultLastUpdate: {
    display: 'flex',
    justifyContent: 'left',
    marginBottom: '25px',
    color: 'gray',
  },
  resultStats: {
    marginBottom: '25px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '15px',
    },
  },
  statItem: {
    display: 'flex',
    justifyContent: 'center',
    height: '30px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '15px',
    },
  },
  statDisplay: (customStyleProps) => ({
    display: 'flex',
    justifyContent: 'center',
    border: `2px solid ${customStyleProps.borderColor}`,
    borderRadius: '10px',
    width: '135px',
    height: '30px',
    [theme.breakpoints.down('sm')]: {
      width: '180px',
      height: '30px',
    },
  }),
}));
