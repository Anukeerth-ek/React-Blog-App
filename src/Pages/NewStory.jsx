import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
     toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
          ["link", "image", "video"],
          ["clean"],
     ],
};

const formats = [
     "header",
     "font",
     "size",
     "bold",
     "italic",
     "underline",
     "strike",
     "blockquote",
     "list",
     "bullet",
     "indent",
     "link",
     "image",
     "video",
];

export const NewStory = () => {
     const [value, setValue] = useState("");

     const handleChange = (content) => {
          setValue(content);
     };

     // NewStory.jsx

     return (
          <div className=" mx-60 mt-40">
               <div>
                    <ReactQuill
                         value={value}
                         onChange={handleChange}
                         modules={modules}
                         formats={formats}
                         className=" h-64"
                    />
               </div>
               <div className="text-center my-14">
                    <button className="border-2 border-blue-400 px-14 py-2 bg-blue-100 hover:bg-blue-800 hover:text-white hover: font-medium ease-in duration-300 rounded-md ml-6">
                         Add Blog
                    </button>
               </div>
          </div>
     );
};
