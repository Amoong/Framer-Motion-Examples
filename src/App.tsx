import { useState } from "react";
import { css } from "@emotion/css";

import Basic from "./Steps/Basic";

import "./App.css";

const appCSS = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #1e5f51, #112521);
`;

const buttonContainerCss = css`
  margin-bottom: 20px;
`;

const buttonCss = css`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 1em;
  background-color: pink;
  color: teal;
  &:active {
    opacity: 0.8;
  }
`;

const stepTitle = css`
  font-size: 2em;
  color: white;
`;

const steps = [Basic, Basic];

function App() {
  const [step, setStep] = useState(1);

  const onClickStepButton = (nextStep: number) => setStep(nextStep);

  return (
    <div className={appCSS}>
      <div className={buttonContainerCss}>
        {steps.map((_, idx) => (
          <button className={buttonCss} key={idx} onClick={() => onClickStepButton(idx)}>
            {idx}
          </button>
        ))}
      </div>
      <div key={step}>
        <h1 className={stepTitle}>{step}</h1>
        {steps[step]()}
      </div>
    </div>
  );
}

export default App;
