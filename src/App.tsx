import React, { useState } from "react";
import { css } from "@emotion/css";

import Basic from "./Steps/Basic";
import Popping from "./Steps/Popping";

import "./App.css";
import Variants from "./Steps/Variants";
import Variants2 from "./Steps/Variants2";
import Gestures from "./Steps/Gestures";
import Gestures2 from "./Steps/Gestures2";
import MotionValues from "./Steps/MotionValues";
import MotionValues2 from "./Steps/MotionValues2";
import MotionValues3 from "./Steps/MotionValues3";
import MotionValues4 from "./Steps/MotionValues4";
import Svg from "./Steps/Svg";
import AnimatePresence from "./Steps/AnimatePresence";
import Slider1 from "./Steps/Slider1";
import Slider2 from "./Steps/Slider2";
import Wow from "./Steps/Wow";
import Wow2 from "./Steps/Wow2";
import Modal from "./Steps/Modal";

const appCSS = css`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #1e5f51, #112521);
`;

const buttonContainerCss = css`
  position: absolute;
  top: 10px;
`;

const buttonCss = (selected: boolean) => css`
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  font-size: ${selected ? "1.2" : "1"}em;
  background-color: ${selected ? "dodgerblue" : "pink"};
  color: ${selected ? "gold" : "teal"};
  &:active {
    opacity: 0.8;
  }
  margin-bottom: 10px;
`;

const stepTitle = css`
  font-size: 2em;
  color: white;
`;

const steps = [
  { component: <Basic />, name: "Basic" },
  { component: <Popping />, name: "Popping" },
  { component: <Variants />, name: "Variants" },
  { component: <Variants2 />, name: "Variants2" },
  { component: <Gestures />, name: "Gestures" },
  { component: <Gestures2 />, name: "Gestures2" },
  { component: <MotionValues />, name: "MotionValue" },
  { component: <MotionValues2 />, name: "MotionValue2" },
  { component: <MotionValues3 />, name: "MotionValue3" },
  { component: <MotionValues4 />, name: "MotionValue4" },
  { component: <Svg />, name: "Svg" },
  { component: <AnimatePresence />, name: "AnimatePresence" },
  { component: <Slider1 />, name: "Slider1" },
  { component: <Slider2 />, name: "Slider2" },
  { component: <Wow />, name: "Wow" },
  { component: <Wow2 />, name: "Wow2" },
  { component: <Modal />, name: "Modal" },
];

function App() {
  const [step, setStep] = useState(0);

  const onClickStepButton = (nextStep: number) => setStep(nextStep);

  return (
    <div className={appCSS}>
      <div className={buttonContainerCss}>
        {steps.map((currentStep, idx) => (
          <button
            className={buttonCss(idx === step)}
            key={idx}
            onClick={() => onClickStepButton(idx)}
          >
            {currentStep.name}
          </button>
        ))}
      </div>
      <div>
        <h1 className={stepTitle}>{steps[step].name}</h1>
        <React.Fragment key={step}>{steps[step].component}</React.Fragment>
      </div>
    </div>
  );
}

export default App;
