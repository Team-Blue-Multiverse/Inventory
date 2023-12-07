import React, { useState, useEffect } from 'react'
import apiURL from '../api'
import { Carousel } from './Carousel'


export const SameCategory = ({categoryCheck}) => { 
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

    let arr = []
    let arr2 = [1]
    {items.map((item) => {
        if(item.category === categoryCheck){
            arr.push(item)
        }
    })}

    return(
       <>
        {arr2.map((item) => {
                return (
                    <div key={item.id}>
                        <Carousel items={arr} />
                    </div>
                  );
        })}
       </> 
    )
}
