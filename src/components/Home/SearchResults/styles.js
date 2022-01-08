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
  resultInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  resultName: {
    textAlign: 'left',
  },
  resultDate: {
    textAlign: 'left',
    color: 'gray',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '15px',
    },
  },
  resultDescription: {
    color: 'gray',
    textAlign: 'justify',
    textJustify: 'inter-word',
    marginBottom: '15px',
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
    border: `2px solid rgb(${customStyleProps.borderColor})`,
    borderRadius: '10px',
    boxShadow: `rgba(${customStyleProps.borderColor}, 0.5) 0 0 8px`,
    width: '135px',
    height: '30px',
    [theme.breakpoints.down('sm')]: {
      width: '180px',
      height: '30px',
    },
  }),
}));
