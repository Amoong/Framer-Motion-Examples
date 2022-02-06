import { motion } from "framer-motion";
import { boxCss } from "./commonStyle";

const myVariants = {
  myInitial: { scale: 0 },
  myAnimate: { scale: 1, rotateZ: 360, transition: { type: "spring" } },
};

function Variants() {
  return (
    <motion.div
      className={boxCss}
      variants={myVariants}
      initial="myInitial"
      animate="myAnimate"
      // ⭐️ 이전에 바로 따로 설정했던 transition 속성은 animate에 같이 넣어준다.
      // ❌ transition="myTransition"
    />
  );
}

export default Variants;
