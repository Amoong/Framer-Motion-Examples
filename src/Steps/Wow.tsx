import { css } from "@emotion/css";
import { motion } from "framer-motion";
import { useState } from "react";
import { boxCss } from "./commonStyle";

const circleCss = css`
  background-color: #00a5ff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.514);
`;

function Wow() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <>
      <motion.div
        className={boxCss}
        onClick={toggleClicked}
        style={{
          display: "flex",
          alignItems: clicked ? "center" : "flex-start",
          justifyContent: clicked ? "center" : "flex-start",
        }}
      >
        <motion.div
          className={circleCss}
          // layout
        />
      </motion.div>
    </>
  );
}

export default Wow;
