import { useStyles } from "./App.styles";
import { Grid } from "./component/Grid";


function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Grid/>
    </div>
  );
}

export default App;
