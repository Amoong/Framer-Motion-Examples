import { motion, useMotionValue, useTransform } from "framer-motion";
import { boxCss } from "./commonStyle";

function MotionValues3() {
  const xPos = useMotionValue(0);
  const rotateZ = useTransform(xPos, [-600, 600], [-360, 360]);
  const gradient = useTransform(
    xPos,
    [-600, 0, 600],
    [
      "linear-gradient(45deg, #5f431e, #c2b598)",
      "linear-gradient(45deg, #1e5f51, #adebde)",
      "linear-gradient(45deg, #5f1e51, #d4b2d8)",
    ],
  );

  return (
    <>
      <motion.div
        style={{ x: xPos, rotateZ, background: gradient }}
        className={boxCss}
        drag="x"
        dragSnapToOrigin
      />
    </>
  );
}

export default MotionValues3;
