import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { boxCss } from "./commonStyle";

function MotionValues() {
  // ⭐️ motionValue는 렌더링을 발생시키지 않는다.
  const xPos = useMotionValue(0);

  useEffect(() => {
    xPos.onChange(() => console.log(xPos.get()));
  }, [xPos]);

  console.log("re-render");

  return (
    <>
      <button onClick={() => xPos.set(200)}>click me</button>
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
