import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '5px',
    marginBottom: '10px',
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
    textAlign: 'justify',
    textJustify: 'inter-word',
    color: 'gray',
    marginBottom: '15px',
  },
  resultStats: {
    marginBottom: '25px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '15px',
    },
  },
  statGridItem: {
    display: 'flex',
    justifyContent: 'center',
    height: '30px',
  },
  statIcon: (customStyleProps) => ({
    color: `rgb(${customStyleProps.statColor})`,
    marginRight: '5px',
    marginTop: '2px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
    },
  }),
  statValue: (customStyleProps) => ({
    color: `rgb(${customStyleProps.statColor})`,
    lineHeight: '2.1rem',
    fontSize: 'calc(10px + 0.5vw)',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.7rem',
      paddingRight: '10px',
    },
  }),
  statDiv: (customStyleProps) => ({
    display: 'flex',
    justifyContent: 'center',
    border: `2px solid rgb(${customStyleProps.statColor})`,
    borderRadius: '10px',
    boxShadow: `rgba(${customStyleProps.statColor}, 0.5) 0 0 8px`,
    width: '135px',
    height: '30px',
    fontSize: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '25px',
    },
  }),
}));
