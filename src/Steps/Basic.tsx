import { motion } from "framer-motion";
import { boxCss } from "./commonStyle";

function Basic() {
  return (
    <>
      {/* ⭐️ 일반 HTML 태그를 사용하면 'framer-motion'을 적용할 수 없다.
      ❌ <div className="Box" /> */}

      {/* ⭐️ 애니메이션에서 변경될 스타일 속성은 initial에 미리 정의해야 한다. 
      혹은 아예 해당 속성을 안 건드리거나. */}
      <motion.div
        animate={{ borderRadius: 100 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={boxCss}
        initial={{ borderRadius: 10 }}
      />
      {/* ⭐️ initial 으로 borderRadius 속성을 재정의 하지 않았을 경우 */}
      {/* <motion.div
        animate={{ borderRadius: 100 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={boxCss}
      /> */}
    </>
  );
}

export default Basic;
