import React from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInputs from "./components/UserInputs"

function App() {
  const [userInputs, setUserInputs] = React.useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInputs(previousInputs => {
      return {
        ...previousInputs,
        [inputIdentifier]: +newValue
      }
    })
  }

  const isInputValid = userInputs.duration >= 1 && userInputs.expectedReturn >= 0
    && userInputs.annualInvestment >= 0 && userInputs.initialInvestment >= 0;

  return (

    <>
      <Header />
      <UserInputs userInputs={userInputs} onInputChange={handleChange} />
      {isInputValid ? <Results userInputs={userInputs} /> : <p id="invalid-input">Please enter valid input values</p>}
    </>

  )
}

export default App
