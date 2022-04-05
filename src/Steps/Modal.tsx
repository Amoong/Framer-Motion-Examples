import { css, cx } from "@emotion/css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { boxCss } from "./commonStyle";

const boxContainerCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 600px;
  grid-gap: 10px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const autoWidth = css`
  width: auto;
`;

const overlayCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

function Modal() {
  const [id, setId] = useState<null | string>(null);

  return (
    <div>
      <motion.div className={boxContainerCss}>
        {["1", "2", "3", "4"].map((n) => (
          <motion.div
            onClick={() => setId(n)}
            key={n}
            // ⭐️ layoutId로 아래 모달과 연결
            layoutId={n}
            className={cx(boxCss, autoWidth)}
          />
        ))}
      </motion.div>
      <AnimatePresence>
        {id && (
          <motion.div
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            className={overlayCss}
            onClick={() => setId(null)}
          >
            <motion.div
              // ⭐️ layoutId로 위의 박스들 중 하나와 연결
              layoutId={id || ""}
              className={cx(boxCss)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Modal;
