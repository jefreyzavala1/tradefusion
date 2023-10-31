import {useState} from 'react'
export default function SearchComponent({searchInput,setSearchInput}){

    const [inputSearch,setInputSearch] = useState('')

    const handleInputChange = (evt)=>{
        setInputSearch(evt.target.value)
    }

    const handleSearchSubmit = async (evt)=>{
        evt.preventDefault();
        //const search = await
        setSearchInput(inputSearch)
        setInputSearch('')

    }
    return(
        <form onSubmit = {handleSearchSubmit}>
            <input type="text"  placeholder="search" className="border mr-5" value={inputSearch} onChange={handleInputChange}/>
            <button type='submit'>Search</button>
        </form>
    )
}