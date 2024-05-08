import React, { Fragment} from "react";

import { UserInputProps } from "./MainContainer";

interface CalcResultProps {
    userInputValue: UserInputProps,
    onChangeValue: Function
}


export default function CalcResultContainer({userInputValue, onChangeValue}: CalcResultProps): React.JSX.Element {
    return (
        <Fragment>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>Initial Investment</label>
                        <input
                            type="number"
                            name="initialInvestment"
                            required
                            placeholder={"10000"}
                            value={userInputValue.initialInvestment}
                            onChange={(event) =>
                                onChangeValue('initialInvestment', event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input
                            type="number"
                            name="annualInvestment"
                            required
                            placeholder={"500"}
                            value={userInputValue.annualInvestment}
                            onChange={(event) =>
                                onChangeValue('annualInvestment', event.target.value)}
                        />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label>Expected Return (%)</label>
                        <input
                            type="number"
                            name="expectedReturn"
                            required
                            placeholder={"4"}
                            value={userInputValue.expectedReturn}
                            onChange={(event) =>
                                onChangeValue('expectedReturn', event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Duration (Years)</label>
                        <input
                            type="number"
                            name="duration"
                            required
                            placeholder={"6"}
                            value={userInputValue.duration}
                            onChange={(event) =>
                                onChangeValue('duration', event.target.value)}
                        />
                    </p>
                </div>
            </section>
        </Fragment>
    );
}