import React, { useState } from "react";
// import { firestore } from "../firebase";
// import firebase from "firebase/app";
// import "firebase/firestore";

export const NewStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleAddBlog = () => {
    firestore
      .collection("blogs")
      .add({
        title: title,
        content: content,
        topics: selectedTopics,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("Blog added successfully");
        // Reset input fields after successful submission
        setTitle("");
        setContent("");
        setSelectedTopics([]);
      })
      .catch((error) => {
        console.error("Error adding blog: ", error);
      });
  };

  const handleTopicSelect = (e) => {
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedTopics(selectedValues);
  };

  return (
    <div className="mt-64 mx-6 flex items-center justify-center flex-column">
      <div className="flex flex-col relative bottom-[130px]">
        <input
          type="text"
          placeholder="Title"
          className="text-6xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your blog..."
          className="text-2xl"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <p>Add or change topics (up to 2) so readers know what your story is about</p>
        <select
          name="topics"
          id="topic-select"
          multiple
          size="5"
          value={selectedTopics}
          onChange={handleTopicSelect}
        >
          <option value="Front End">Front End</option>
          <option value="ReactJS">ReactJS</option>
          <option value="React Native">React Native</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Development Tools">Development Tools</option>
          <option value="Startups">Startups</option>
          <option value="Security">Security</option>
          <option value="AI">AI</option>
          <option value="Apps">Apps</option>
        </select>
        <button onClick={handleAddBlog}>Add Blog</button>
      </div>
    </div>
  );
};
