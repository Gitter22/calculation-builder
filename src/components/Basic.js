import { useState } from 'react';
const FormulaParser = require('hot-formula-parser')

const parser = new FormulaParser.Parser()

function Basic() {
    const [formula, setFormula] = useState('')
    const [output, setOutput] = useState(null)



    function handleChange(e) {
        setFormula(e.target.value)
    }

    function handleEvaluate() {
        const output = parser.parse(formula)
        setOutput(output)
    }

    function handleClear() {
        setFormula('')
        setOutput(null)
    }

    return (
        <div>
            <h1>Basic Example</h1>
            <label>
                Enter Formula:
                <input value={formula} onChange={handleChange} />
            </label>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleEvaluate}>Evaluate</button>
            <div style={{ margin: "10px", padding: "10px" }}>
                <div style={{ padding: "10px" }}>Formula: {formula}</div>
                <div style={{ padding: "10px" }}>Result: {output && output.result}</div>
                <div style={{ padding: "10px" }}>Error: {output && output.error}</div>


            </div>
        </div>
    );
}

export default Basic;
