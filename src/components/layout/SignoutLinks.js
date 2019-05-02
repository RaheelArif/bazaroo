
import React from 'react'
import { Link } from 'react-router-dom';

export default function SignedOutLinks() {
  return (
    <div>
      <Link className="my-nav-link" to="/signup" >Signup</Link>
    </div>
  )
}