import { useState } from "react";
import { SearchIcon } from "../../assets/svg/searchIcon";
import "./searchInput.scss";

interface ISearchInputProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

const SearchInput = ({
    placeholder = "Search...",
    onSearch
}:ISearchInputProps) => {
    
    const [searchQuery, setSearchQuery] = useState<string>("");
  
    const handleSearchQuery = () => {
      onSearch(searchQuery);
    };
  
    return (
        <div className="search-input">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={placeholder}
                className="search-input__field"
            />
            <button className="search-input__icon" onClick={handleSearchQuery}>
                <SearchIcon />
            </button>
        </div>
    );
};
  
export default SearchInput;