import { motion } from "framer-motion";
import { boxCss } from "./commonStyle";

function Popping() {
  return (
    <>
      {/* ⭐️ 'framer-motion은 transition->type의 디폴트 값이 'spring'이라 튕기는 듯한 모션을 보여준다.'
      'tween'으로 설정하면 선형적인 모션을 보여준다. */}
      <motion.div
        className={boxCss}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
        // transition={{ type: "tween" }}
        transition={{
          // type: 'tween,'
          type: "spring",
          // ⭐️ type: "spring" 에만 적용되는 속성
          // ⭐️ 'stiffness': 스프링 탄력의 정도
          // stiffness: 50,
          // ⭐️ 'damping': 스프링 운동에 작용하는 저향력
          // damping: 10,
          // ⭐️ 'mass': 물체의 무거운 정도를 나타내는 값
          // mass: 1,
          // ⭐️ 'bounce': 얼마나 애니메이션이 탄력적일지 (0 ~ 1)
          // bounce: 0.5,
        }}
        
      />
    </>
  );
}

export default Popping;
