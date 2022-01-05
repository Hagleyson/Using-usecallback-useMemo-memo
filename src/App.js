import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  const [showParagraph, seShowParagraph] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    seShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>

      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
