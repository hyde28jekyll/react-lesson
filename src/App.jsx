import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("a");
  const [num, setnum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickCountUp = () => {
    setnum(num + 1);
  };

  const onClickSwichShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "#ff0011" }}>Hello</h1>
      <ColorfulMessage color="blue">How is it going?</ColorfulMessage>
      <ColorfulMessage color="red">I'm fine. </ColorfulMessage>
      <button onClick={onClickCountUp}>count up</button>
      <button onClick={onClickSwichShowFlg}>on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>(- -;)</p>}
    </>
  );
};

export default App;
