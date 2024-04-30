import React, { useState } from "react";
import CategorySelection from "./CategorySelection";
import Navbar from "./Navbar";

const ParentComponent = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  return (
    <>
      <Navbar />
      <CategorySelection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </>
  );
};

export default ParentComponent;
