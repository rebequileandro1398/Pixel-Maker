import { useStyles } from "./App.styles";
import { Grid } from "./component/Grid";
import { ColorPicker } from "./component/ColorPicker";
import { useState } from "react";

function App() {
  const classes = useStyles()
  const [currentColor, setCurrentColor] = useState('#004ac2')
  return (
    <div className={classes.app}>
      <Grid currentColor={currentColor}/>
      <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor}/>
    </div>
  );
}

export default App;
