import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { boxCss } from "./commonStyle";

function MotionValues2() {
  const xPos = useMotionValue(0);

  // const scaleByPos = useTransform(xPos, [-600, 0, 600], [2, 1, 0.1]);
  const scaleByPos = useTransform(xPos, [-600, 600], [2, 0.1]);

  useEffect(() => {
    xPos.onChange(() => console.log(scaleByPos.get()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xPos]);

  return (
    <>
      <motion.div
        style={{ x: xPos, scale: scaleByPos }}
        className={boxCss}
        drag="x"
        dragSnapToOrigin
      />
    </>
  );
}

export default MotionValues2;
