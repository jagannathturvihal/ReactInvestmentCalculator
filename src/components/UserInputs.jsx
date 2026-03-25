import React from "react"

export default function UserInputs({onInputChange, userInputs}) {
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment:</label>
                    <input type="number" required value = {userInputs.initialInvestment} onChange={(event) => onInputChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment:</label>
                    <input type="number" required value = {userInputs.annualInvestment} onChange={(event) => onInputChange('annualInvestment', event.target.value)} />
                </p>
                </div>
            <div className="input-group">
                <p>
                    <label>Expected Return:</label>
                    <input type="number" required value = {userInputs.expectedReturn} onChange={(event) => onInputChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration:</label>
                    <input type="number" required value = {userInputs.duration} onChange={(event) => onInputChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}

