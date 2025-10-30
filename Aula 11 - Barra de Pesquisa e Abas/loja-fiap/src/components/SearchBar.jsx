const SearchBar = () => {

    return (
         <div className="w-64">
         <input
            type="text"
            id="search"
            placeholder="Pesquisar produtos..."
            className="pl-10 pr-3 py-1 w-64 bg-transparent border-b-2 border-black focus:border-black outline-none transition-colors duration-300"
          />

        <ul className="hidden absolute top-full left-0 w-full bg-white border shadow mt-1 z-10 max-h-60 overflow-y-auto">
            <li> Itens  </li>
        </ul>
        
        </div>
          
    )
}

export default SearchBar;