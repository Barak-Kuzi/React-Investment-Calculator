import React, { Fragment, SetStateAction, useState} from "react";

import UserInputContainer from "./UserInputContainer";
import CalcResultContainer from "./CalcResultContainer";

export interface UserInputProps {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
}

type NumberOrString = number | string;

const INITIAL_USER_INPUT: UserInputProps = {
    initialInvestment: "" as unknown as number,
    annualInvestment: "" as unknown as number,
    expectedReturn: "" as unknown as number,
    duration: "" as unknown as number
}

export default function MainContainer(): React.JSX.Element {
    const [userInput, setUserInput]: [UserInputProps, React.Dispatch<SetStateAction<UserInputProps>>]
        = useState(INITIAL_USER_INPUT);

    const inputsIsValid: boolean = userInput.duration >= 1;

    function handleChangeUserInput(inputIdentifier: string, newValue: NumberOrString): any {
        setUserInput((prevUserInput: UserInputProps) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: Number(newValue)
            };
        });
    }

    return (
        <Fragment>
            <UserInputContainer userInputValue={userInput} onChangeValue={handleChangeUserInput} />
            {!inputsIsValid ? <p className="center">Please enter a duration greater then zero.</p> : null}
            {inputsIsValid ? <CalcResultContainer userInputValue={userInput} /> : null}
        </Fragment>
    );
}