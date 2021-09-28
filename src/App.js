import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import Uno from "./components/Uno";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: { main: red[500] },
    secondary: { main: "#333" },
  },
});

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className="classes.root">
        <h1>Botones</h1>
        <Uno title="Mis Habilidades" id="skills" dark={false} />
      </div>
    </MuiThemeProvider>
  );
}

//**para utilizar ui core */
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
