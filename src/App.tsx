import { Search } from "./components/Search";
import { useState, useEffect } from "react";
import { LibraryList } from "./components/LibraryList";

const App = () => {
  const [resultData, setResultData] = useState([]);
  // const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    console.log("executed");
    let test = [...resultData];
    test.map((result) => fetchHTML(result));
  }, [resultData]);

  const fetchHTML = async (result: any) => {
    console.log("result.link)", result.link);
    const res = await fetch(result.link, {
      mode: "no-cors",
    });
    const html = await res.text();
    console.log("html", html);
    getScripts(html);
  };

  const getScripts = (html: any) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    console.log(html);
    let library: any[] = [];
    console.log(doc);
    let scripts = doc.querySelectorAll("script[src]");
    scripts.forEach((e: any) => library.push(e.src));
    console.log(library);
    //setLibraries([...libraries, library]);
  };

  const onSearch = async (text: string) => {
    const apiGoogle =
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyBUJXr59OUD6ksX71V8HAJaXsrJLxO0eXY&cx=017576662512468239146:omuauf_lfve&q=";

    const res = await fetch(`${apiGoogle}${text}`);
    const data = await res.json();
    setResultData(data.items);
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
