import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import EmojiList from "./components/EmojiList";
import emojiJson from "./data/emoji.json";

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} keyword={keyword} />
    </div>
  );
}

export default App;
