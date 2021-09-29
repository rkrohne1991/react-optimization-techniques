import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button/Button";
// import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

import "./App.css";

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("My List");

  // console.log("App RUNNING");

  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      {/* <h1>Hi there!</h1> */}
      {/* <DemoOutput show={showParagraph} /> */}
      {/* <Button onClick={allowToggleHandler}>Allow Toggle</Button> */}
      {/* <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button> */}
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
