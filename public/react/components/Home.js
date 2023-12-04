import React from 'react';
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h1>Welcome to team Blue</h1>
        <div>
            <Link to='/items'>Go to Items Available</Link>
            <hr />
            <Link to='/sauces'>Go to Sauces Available</Link>
        </div>
    </div>
  )
} 

	