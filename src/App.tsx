import { Search } from "./components/Search";
import { useState } from "react";
import { LibraryList } from "./components/LibraryList";

const App = () => {
  const [resultData, setResultData] = useState([]);

  const onSearch = async (text: string) => {
    console.log("text searched", text);
    const apiGoogle =
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyBUJXr59OUD6ksX71V8HAJaXsrJLxO0eXY&cx=017576662512468239146:omuauf_lfve&fileType=html&q=";

    const res = await fetch(`${apiGoogle}${text}`);
    const data = await res.json();
    setResultData(data.items)
  };

  return (
    <div className="container">
      <h1>Library crawler</h1>
      <Search onClickSubmit={onSearch} />
      {resultData && <LibraryList data={resultData} />}
    </div>
  );
};

export default App;
