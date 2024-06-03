import React, { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const Categories = [
    "Front End",
    "React JS",
    "React Native",
    "JavaScript",
    "Development Tools",
    "Startups",
    "Security",
    "AI",
    "Apps",
   
  ];

  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container.scrollLeft > 0) {
      setShowLeftArrow(true);
    } else {
      setShowLeftArrow(false);
    }
  };

  // FOR SMALL SCREENS
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollRight = () => {
    const container = containerRef.current;
    const scrollIncrement = 100; // Adjust as needed
    container.scrollTo({
      left: container.scrollLeft + scrollIncrement,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mx-3 md:mx-0">
      <div
        ref={containerRef}
        className={`md:px-1 md:mb-6 lg:space-x-12 flex flex-wrap  items-center border-b-2 py-5 font-medium ${isSmallScreen ? "py-2 flex-col max-h-[1px] overflow-x-auto" : ""
        }`}
      >
        {showLeftArrow && isSmallScreen && (
          <div
            className="absolute top-0 left-0 bottom-0 flex items-center px-2 cursor-pointer"
            onClick={() => containerRef.current.scrollTo({
              left: containerRef.current.scrollLeft - 100, behavior: "smooth"
            })}
          >
            <MdKeyboardArrowLeft />
          </div>
        )}
        <button
          onClick={() => onSelectCategory(null)}
          className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}
        >
          All
        </button>
        {Categories.map((category) => (
          <button
            onClick={() => onSelectCategory(category)}
            className={`lg:space-x-16 ml-5 ${
              activeCategory === category ? "active-button" : ""
            }`}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      {isSmallScreen && (
        <div
          className="absolute top-0 right-0 bottom-0 flex items-center px-2 cursor-pointer"
          onClick={handleScrollRight}
        >
          <MdKeyboardArrowRight />
        </div>
      )}
    </div>
  );
};

export default CategorySelection;