import { motion } from "framer-motion";
import { boxCss } from "./commonStyle";

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "#1f5599", transition: { duration: 1 } },
};

function Gestures() {
  return (
    <>
      <motion.div
        className={boxCss}
        // whileHover={{ scale: 1.5, rotateZ: 90 }}
        // whileTap={{ scale: 1, borderRadius: "100px" }}
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
        drag
      />
    </>
  );
}

export default Gestures;
