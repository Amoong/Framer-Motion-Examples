import { css, cx } from "@emotion/css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { boxCss } from "./commonStyle";

const biggerBoxCss = css`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Gestures2() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <motion.div ref={biggerBoxRef} className={cx(boxCss, biggerBoxCss)}>
        <motion.div
          className={boxCss}
          // ⭐️ 축 이동만 가능하도록 할 수 있다.
          // drag="x"
          // drag="y"
          // ⭐️ 직접 값을 줘서 이동을 제한하는 방식
          // dragConstraints={{ left: -100, top: -100, right: 100, bottom: 100 }}
          // ⭐️ 원래 자리로 돌아오도록 하는 속성
          // dragSnapToOrigin
          // ⭐️ dragConstranints 범위를 벗어났을때 얼마나 더 당겨지는지
          // dragElastic={0.5}
          // ⭐️ ref를 사용해서 이동을 제한하는 방식
          dragConstraints={biggerBoxRef}
          drag
        />
      </motion.div>
    </>
  );
}

export default Gestures2;
