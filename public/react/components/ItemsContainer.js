import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import apiURL from '../api';


export const Items = () => {
  const [items, setItems] = useState([])

  const fetchItems = async()=>{
		try {
			const res = await fetch(`${apiURL}/items`)
			const data = await res.json()
			setItems(data)
		} catch (error) {
			console.log(error)
		}
	}

  useEffect(() => {
		fetchItems()
	}, []);

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-blue-500'>Items Available</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={item.image} alt="Item Image" 
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>

              <div className='mt-4 flex justify-between'>
                <div>
                  <Link to={`${item.id}`}>
                    <h3 className='text-sm text-gray-700'>
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {item.name}
                    </h3>
                  </Link>
                </div>
                <p className='text-sm font-medium text-gray-900'>${item.price}</p>
              </div>
            </div>
				))}
        </div>
      </div>
    </div>
  )
} 
