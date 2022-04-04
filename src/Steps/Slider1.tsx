import { css, cx } from "@emotion/css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { boxCss } from "./commonStyle";

const buttonCss = css`
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
`;

const boxContentsCss = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  top: 50px;
`;

const boxContainerCss = css`
  position: relative;
  display: flex;
`;

const boxVariants = {
  entry: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Slider1() {
  const [visible, setVisible] = useState(1);

  const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  const prevPlease = () => setVisible((prev) => (prev === 1 ? 1 : prev - 1));

  return (
    <>
      <div className={boxContainerCss}>
        <AnimatePresence>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (i) =>
              i === visible && (
                <motion.div
                  key={i}
                  className={cx(boxCss, boxContentsCss)}
                  variants={boxVariants}
                  initial="entry"
                  animate="center"
                  exit="exit"
                >
                  {i}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
      <button className={buttonCss} onClick={prevPlease}>
        prev
      </button>
      <button className={buttonCss} onClick={nextPlease}>
        next
      </button>
    </>
  );
}

export default Slider1;
