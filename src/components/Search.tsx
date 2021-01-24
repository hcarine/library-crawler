import { useState } from "react";
type SearchProps = {
  onClickSubmit: (text: string) => void;
};

export const Search = ({ onClickSubmit }: SearchProps) => {
  const [text, setText] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    onClickSubmit(text);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Type here the value to search"
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="Start search" />
    </form>
  );
};
