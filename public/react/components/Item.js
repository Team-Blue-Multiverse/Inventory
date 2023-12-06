import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import apiURL from '../api';
import { SameCategory } from './SameCategory';

export const ItemContainer = () => {
    let { id } = useParams()
    const [item, setItem] = useState([])

    const fetchItem = async()=>{
        try {
            const res = await fetch(`${apiURL}/items/${id}`)
            const data = await res.json()
            setItem(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchItem()
    }, [])

  return (
    <div className=''>
        <div className='mx-auto px-4 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-10 sm:max-w-full flex flex-col'>
            {/* container-item */}
            <div className='flex items-center mt-5'>
                {/* container Image */}
                <div className=''>
                    <img className='h-full w-full object-cover object-center lg:max-w-full' src={item.image} alt='Item Image' />
                </div>
                {/* description page */}
                <div className='flex flex-col ml-20'>
                    <h2 className='font-bold text-xl mb-1'>{item.name}</h2>
                    <h4 className='font-bold text-xl mb-1'>{item.category}</h4>
                    <hr />
                    <p className='mt-12'>{item.description}</p>
                </div>
            </div>

        </div>

        {/* Show more the same */}
        <div className='mt-20 px-4 py-16'>
            <div className='text-center'>More the same</div>
            <div>
                <SameCategory categoryCheck={item.category} />
            </div>
        </div>
    </div>
  )
} 
	