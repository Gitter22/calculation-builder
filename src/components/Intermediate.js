import { useState } from 'react';
const FormulaParser = require('hot-formula-parser')

const parser = new FormulaParser.Parser()

function Intermediate() {
    const [formula, setFormula] = useState('')
    const [resultName, setResultName] = useState('')
    const [output, setOutput] = useState(null)

    function handleFormula(e) {
        setFormula(e.target.value)
    }
    function handleResultName(e) {
        setResultName(e.target.value)
    }

    function handleEvaluate() {
        const output = parser.parse(formula)
        parser.setVariable(resultName, output)
    }

    function handleClear() {
        setFormula('')
        setOutput(null)
        setResultName('')
    }

    function handleGetResult() {
        const output = parser.getVariable(resultName)
        setOutput(output)
    }

    return (
        <div>
            <h1>Intermediate Example</h1>
            <label>
                Add Calculation Step:
                <input value={resultName} onChange={handleResultName} />
                =
                <input value={formula} onChange={handleFormula} />
            </label>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleEvaluate}>Evaluate</button>
            <div style={{ margin: "10px", padding: "10px" }}>
                <div style={{ padding: "10px" }}>Formula: {formula}</div>
                <button style={{ padding: "10px" }} onClick={handleGetResult}>Get Result</button>
                <div style={{ padding: "10px" }}>Result: {output && output.result}</div>
                <div style={{ padding: "10px" }}>Error: {output && output.error}</div>
            </div>
        </div>
    );
}

export default Intermediate;
