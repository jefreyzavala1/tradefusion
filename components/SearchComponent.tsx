'use client'
import {useState} from 'react'
export default function SearchComponent(){

    const [inputSearch,setInputSearch] = useState('')
    const [searchInput,setSearchInput] = useState('')
    const handleInputChange = (evt:any)=>{
        setInputSearch(evt.target.value)
    }

    const handleSearchSubmit = async (evt:any)=>{
        evt.preventDefault();
        //const search = await
        setSearchInput(inputSearch)
        setInputSearch('')

    }
    return(
        <form onSubmit = {handleSearchSubmit} className='flex items-center'>
            <input type="text"  placeholder="search" className="border border-gray-300 rounded p-2 mr-2 focus:outline-none focus:ring focus:border-blue-500" value={inputSearch} onChange={handleInputChange}/>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200'>Search</button>
        </form>
    )
}