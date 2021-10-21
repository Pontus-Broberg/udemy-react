import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is something nice.",
  },
  {
    title: "Why use React?",
    content: "Cause it is nice.",
  },
  {
    title: "How do you use React?",
    content: "You use it by creating components.",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
