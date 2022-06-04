import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
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