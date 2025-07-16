import { useState } from 'react';

const App = () => {
  const Arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const [count1, setCount1] = useState(Arr);
  const [count, setCount] = useState(Arr);

  const handleEven = () => {
    setCount(Arr.filter((x) =>{
      if(x % 2 === 0)
        return x
    }
       ));
  };

  const handleOdd = () => {
    setCount(Arr.filter((x) =>{
      if( x % 2 !== 0)
      return x;
    }
    ));
  };

  const handleAllNumbers = () => {
    setCount(Arr);
  };

  return (
    <div>
      <h1>{count.join(', ')}</h1>
      <button onClick={handleEven}>B1</button>
      <button onClick={handleOdd}>B2</button>
      <button onClick={handleAllNumbers}>B3</button>
    </div>
  );
};

export default App;
