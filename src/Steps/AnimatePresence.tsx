import { css } from "@emotion/css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { boxCss } from "./commonStyle";

const buttonCss = css`
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20,
    scale: 0,
    // ⭐️ transition 설정 가능
    // transition: {
    //   duration: 2,
    // },
  },
};

function AnimatePresenceExample() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);

  return (
    <>
      <button className={buttonCss} onClick={toggleShowing}>
        toggle
      </button>
      <AnimatePresence>
        {showing && (
          <motion.div
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
            className={boxCss}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimatePresenceExample;
