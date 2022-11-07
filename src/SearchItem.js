
const SearchItem = ({ search, setSearch }) => {
    return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        
        <input
            id='search'
            type='text'
            // eslint-disable-next-line
            role='searchBox'
            placeholder='Search Items'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
        />
    </form>
    )
}

export default SearchItem