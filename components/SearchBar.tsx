"use client";

import { manufacturers } from "@/constants";
import { SearchManufacturer } from ".";

import { useState } from "react";


const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const handleSearch = () => { }


    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__icon">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
            </div>

        </form>
    )
}

export default SearchBar