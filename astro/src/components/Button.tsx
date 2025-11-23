import { useState } from "react";
type Props = {};

export default function Button({}: Props) {
  const [counter, setCounter] = useState(0);
  return (
    <button
      className="w-20 h-20 bg-red"
      onClick={() => setCounter((prev) => prev + 1)}
    >
      {counter}
    </button>
  );
}
