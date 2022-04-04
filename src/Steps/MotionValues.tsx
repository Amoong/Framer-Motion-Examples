import { css } from "@emotion/css";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { boxCss } from "./commonStyle";

const buttonCss = css`
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
`;

function MotionValues() {
  // ⭐️ motionValue는 렌더링을 발생시키지 않는다.
  const xPos = useMotionValue(0);

  useEffect(() => {
    xPos.onChange(() => console.log(xPos.get()));
  }, [xPos]);

  console.log("re-render");

  return (
    <>
      <button className={buttonCss} onClick={() => xPos.set(200)}>
        click me
      </button>
      <motion.div
        style={{ x: xPos }}
        className={boxCss}
        drag="x"
        dragSnapToOrigin
      />
    </>
  );
}

export default MotionValues;
