import { css, cx } from "@emotion/css";
import { motion } from "framer-motion";
import { useState } from "react";
import { boxCss } from "./commonStyle";

const boxContainerCss = css`
  width: 800px;
  display: flex;
  justify-content: space-between;
`;

const centerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const circleCss = css`
  background-color: #00a5ff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.514);
`;

function Wow2() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <div className={boxContainerCss} onClick={toggleClicked}>
      <motion.div className={cx(boxCss, centerCss)}>
        {clicked && (
          <motion.div
            className={circleCss}
            // layoutId="circle"
          />
        )}
      </motion.div>
      <motion.div className={cx(boxCss, centerCss)}>
        {!clicked && (
          <motion.div
            className={circleCss}
            // layoutId="circle"
            // style={{ scale: 2 }}
          />
        )}
      </motion.div>
    </div>
  );
}

export default Wow2;
