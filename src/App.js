import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import UploadIcon from '@mui/icons-material/Upload';

function App() {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Bienvenido a DDrop
      </Typography>
      <Typography color="grey" align="center">
        Para subir tus archivos de forma simple a drive,<br></br>
        puedes hacer Login a traves de Google.
      </Typography>
      <Button 
       variant="contained"
       color="primary"
       align="center"
       startIcon={<UploadIcon />}
       disableElevation
      >
        Subir archivos
      </Button>
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