import { StylizedHeader } from "./style.js"

import logoKenzie from "../../assets/logoKenzie.svg"

import { useState } from "react";

export const Header = ({setSearch}) => {
    const [searchInput, setSearchInput] = useState(""); 

    const submit = (event) => {
        event.preventDefault();
        setSearch(searchInput);
        setSearchInput("");
    }

    return (
        <StylizedHeader>
            <div className="header-container">
                <img src={logoKenzie}></img>
                <div className="search-container">
                    <form onSubmit = {submit}>
                        <input type="search" value={searchInput} placeholder="Digitar pesquisa" onChange={(e) => setSearchInput(e.target.value)}>
                        </input>
                        <button type="submit" className="btn-03">
                            Pesquisar
                        </button>
                    </form>
                </div>
            </div>
        </StylizedHeader>
    )
}