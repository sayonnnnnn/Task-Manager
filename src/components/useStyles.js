import { makeStyles } from '@material-ui/styles'; 

const useStyles = makeStyles({
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    //height: 52,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Lucida Sans',
    padding: '35px 0',
    margin: '5px'
  },
  button: {
    background: 'mediumslateblue',
    borderRadius: 5,
    color: 'white',
    padding: '0 30px'
  }
});

export default useStyles