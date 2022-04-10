import React, { useEffect, useState } from "react";
import { useInput } from "../hooks/customeHooks";

export default function SearchForm({ onSearch = f => f }) {
    const [searchFomrProps, resetSearchForm] = useInput("");

    const submit = e => {
        e.preventDefault();
        onSearch(searchFomrProps.value);
        resetSearchForm();
    }

    return (
        <form onSubmit={submit} style={{ display: "flex" }}>
            <input {...searchFomrProps} type="text" required />
            <button>Search</button>
        </form>
    );
}