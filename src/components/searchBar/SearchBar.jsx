import { SearchOutlined } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue("")
    }
  };
  return (
    <>
      <Paper
        className="w-[30%] h-12 flex justify-between"
        onSubmit={submitHandler}
        component={"form"}
      >
        <input
          type="search"
          placeholder="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="outline-none ml-5 w-[90%] font-medium"
        />
        <IconButton type="submit">
          <SearchOutlined />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
