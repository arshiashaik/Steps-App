import { useState } from "react";

const messages = ["Learn React", "Make Projects", "Apply for Jobs"];

export default function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) setStep((changeStep) => changeStep - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((changeStep) => changeStep + 1);
  };

  const [isOpen, setisOpen] = useState("true");

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div>
          <h1>Steps to Become a React Developer</h1>
          <div className="main-container">
            <div className="numbers-container">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            <p className="active-step-message">
              Step {step}: {messages[step - 1]}
            </p>

            <div className="buttons-conatiner">
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
