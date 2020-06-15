import React from 'react';
import './search-list.css';

export const SearchList = ({placeholder, handleChange}) =>{
   return <input className="search" type="search" placeholder ={placeholder} onChange={handleChange} />
}

    

