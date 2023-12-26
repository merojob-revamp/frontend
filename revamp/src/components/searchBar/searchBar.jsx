import Search_icon from './elements/search_icon.jsx';
import Location_icon from './elements/location_icon.jsx';
import './searchBar.css'

function SearchBar() {
    return (
        <>
        <div className="search">
            <div className="position">
                <Search_icon color="gray" size="20px"/>
                <input type="text" placeholder="What position are you looking for ?" />
            </div>
            <div className="location">
            <Location_icon color="gray" size="50px"/>
                <input type="text" placeholder="Location ..." />
            </div>
            <div onClick={()=>console.log('search button pressed...')} className="button">
                <div className="text">
                    Search
                </div>
            </div>
        </div>
        </>
    );
}

export default SearchBar;