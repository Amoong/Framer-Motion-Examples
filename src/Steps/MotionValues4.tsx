import { css, cx } from "@emotion/css";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { boxCss } from "./commonStyle";

const tallBoxCss = css`
  height: 200vh;
`;

function MotionValues4() {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.5, 4]);

  useEffect(() => {
    scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className={cx(boxCss, tallBoxCss)}
        drag="x"
        dragSnapToOrigin
      />
    </>
  );
}

export default MotionValues4;
