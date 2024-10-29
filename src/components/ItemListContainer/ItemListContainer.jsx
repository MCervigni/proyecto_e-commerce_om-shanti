import React from 'react'
import "./itemListContainer.css";

export const ItemListContainer = ({greeting}) => {
    return (
        <div className='bienvenida'>
            {greeting}
        </div>
    )
}