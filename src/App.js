import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div>
      <Typography variant="h4" align="center">
        Bienvenido a DDrop
      </Typography>
      <Typography align="center">
        Para subir tus archivos de forma simple a drive,<br></br>
        puedes hacer Login a traves de Google.
      </Typography>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/create">Create</Link> |{" "}
        <Link to="/notes">Notes</Link>
      </nav>
    </div>
  );
}

export default App;