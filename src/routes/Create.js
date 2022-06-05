import React from 'react'
import { Link } from "react-router-dom";

export default function Create() {
  return (
    <div>
      <h1>Create Page!</h1>
      <Link to="/notes">Notes</Link>
    </div>
  )
}
