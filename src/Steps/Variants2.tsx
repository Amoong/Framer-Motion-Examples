import { css } from "@emotion/css";
import { motion } from "framer-motion";

const wrapperCss = css`
  display: grid;
  grid-template-columns: 100px 2fr;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
`;

const circleCss = css`
  background-color: #fafafa;
  width: 70px;
  height: 70px;
  place-self: center;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
`;

const boxVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      // variants를 사용할때만 쓸 수 있는 속성
      delayChildren: 0.5,
      staggerChildren: 0.2,
      ///////////////////////////////////////
    },
  },
};

const circleVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

function Variants2() {
  return (
    <motion.div
      className={wrapperCss}
      variants={boxVariants}
      initial="initial"
      animate="animate"
    >
      {/* ⭐️ 부모 컴포넌트는 자식 컴포넌트한테 'initial', 'animate' 속성을 자동으로 주입해준다.
      variants에 있는 속성이 아닌 initial, animate 자체에 들어간 문자열을 주입 */}
      <motion.div variants={circleVariants} className={circleCss} />
      <motion.div variants={circleVariants} className={circleCss} />
      <motion.div variants={circleVariants} className={circleCss} />
      <motion.div variants={circleVariants} className={circleCss} />
    </motion.div>
  );
}

export default Variants2;
