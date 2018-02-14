import React from 'react';


const SearchBar = (props)=>{
    return(
     <input type='text' value={props.value} onChange={(e)=>props.onChange(e.target.value)}/>

    )
}

export default SearchBar