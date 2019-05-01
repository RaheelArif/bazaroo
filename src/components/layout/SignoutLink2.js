import React from 'react'
import { Link } from 'react-router-dom';

export default function SignedOutLinks2() {
  return (
    <div>
      <Link className="my-nav-link" to="/" >Login</Link>
    </div>
  )
}