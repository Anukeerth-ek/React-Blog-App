import React from "react";

const CategorySelection = ({ onSelectCategory, selectedCategory, activeCategory }) => {
     const Categories = ["Reactjs", "Startups","Security", "AI", "Apps"];
     return (
          <div className=" md:px-4 mb-8 lg: space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
               <button onClick={()=> onSelectCategory(null)} className={` lg:ml-12 ${activeCategory ? '' : 'active-button'}`}>All</button>
               {Categories.map((category) => (
                    <button
                        onClick={()=> onSelectCategory(category)}
                         className={`lg:space-x-16 ${activeCategory === category ?  "active-button" : ""}`}
                         key={category}
                    >
                         {category}
                    </button>
               ))}
          </div>
     );
};

export default CategorySelection;
