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
  // ⭐️ variants의 속성을 custom 프로퍼티를 받아서
  // 설정 값을 리턴하는 함수로 변경해줘야 함
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  // ⭐️ 여기도 함수로 변경
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

function Slider1() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <>
      <div className={boxContainerCss}>
        <AnimatePresence
          // ⭐️ 사용자 정의 변수 전달
          custom={back}
          // ⭐️ exit 애니메이션이 일어나야 initial 애니메이션이 일어남
          // exitBeforeEnter
        >
          <motion.div
            key={visible}
            className={cx(boxCss, boxContentsCss)}
            variants={boxVariants}
            initial="entry"
            animate="center"
            exit="exit"
            // ⭐️ 사용자 정의 변수 전달
            custom={back}
          >
            {visible}
          </motion.div>
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
