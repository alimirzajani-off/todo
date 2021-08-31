import { TextField , makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const DatePickers=()=> {
    const classes = useStyles();
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Add due date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink:true,
          }}
        />
      </form>
    );
  }

  export default DatePickers