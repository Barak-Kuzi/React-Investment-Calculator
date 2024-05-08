import React, { Fragment } from "react";
import {calculateInvestmentResults, formatter, InvestmentResultsProps} from "../util/investment";
import { UserInputProps } from "./MainContainer";

export interface calcResultProps {
    userInputValue: UserInputProps
}

export default function CalcResultContainer({userInputValue}: calcResultProps): React.JSX.Element {
    const resultData: InvestmentResultsProps[] = calculateInvestmentResults(userInputValue);
    const initialInvestment: number =
        resultData[0].valueEndOfYear -
        resultData[0].interest -
        resultData[0].annualInvestment;

    return (
        <Fragment>
            <table id="result">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                </thead>
                <tbody>
                {resultData.map((dataInCurYear) => {
                    const totalInterest = dataInCurYear.valueEndOfYear -
                        (dataInCurYear.annualInvestment * dataInCurYear.year) - initialInvestment;
                    const totalAmountInvested: number = dataInCurYear.valueEndOfYear - totalInterest;
                    return (
                        <tr key={dataInCurYear.year}>
                            <td>{dataInCurYear.year}</td>
                            <td>{formatter.format(Math.round(dataInCurYear.valueEndOfYear))}</td>
                            <td>{formatter.format(Math.round(dataInCurYear.interest))}</td>
                            <td>{formatter.format(Math.round(totalInterest))}</td>
                            <td>{formatter.format(Math.round(totalAmountInvested))}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </Fragment>
    );
}