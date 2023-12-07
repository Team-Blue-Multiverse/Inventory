import React from 'react';
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='mx-auto px-4 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-10 sm:max-w-full flex flex-col'>
        <h1 className='text-xl'>Welcome to team Blue</h1>
        <div>
            <Link to='/items'>Go to Items Available</Link>
            <hr />
            <Link to='/sauces'>Go to Sauces Available</Link>
            <hr />
            <Link to='/createItem'>Add items</Link>
        </div>
    </div>
  )
} 

	