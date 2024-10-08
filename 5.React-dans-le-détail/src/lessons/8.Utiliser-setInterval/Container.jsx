import { useState, useEffect } from "react";

export default function Container() {
  const [count, setCount] = useState(0);

  // setInterval(() => {
  //   setCount(count +1)
  // },1000)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcount (count +1);
    }, 1000);
    return () => clearInterval(intervalId)
  }, []);

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
    </div>
  );
}
