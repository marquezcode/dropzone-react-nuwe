import React from 'react'
import { Link } from "react-router-dom";

export default function Notes() {
  return (
    <div>
      <h1>Notes Page</h1>
      <Link to="/create">Expenses</Link>
    </div>
  )
}
