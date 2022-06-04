import React from 'react'
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default function Notes() {
  return (
    <div>
      <Typography variant="h1">
        Notes Page
      </Typography>
      <Link to="/create">Expenses</Link>
    </div>
  )
}
