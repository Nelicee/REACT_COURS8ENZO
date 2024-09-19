import { useState, useCallback } from "react";
import Card from "./Card";

export default function Container() {
  const customLog = useCallback(() => console.log("Bonjour"), []);
  // function customlog(){
  //   console.log("Bonjour")
  // }
  const [count, setCount] = useState(0);
  return (
    <div>
      <Card txt={"test"} customLog={customLog} />
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
