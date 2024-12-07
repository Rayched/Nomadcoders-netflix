import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <div>버튼 클릭 횟수: {count}회</div>
    </div>
  );
};

export default App;
