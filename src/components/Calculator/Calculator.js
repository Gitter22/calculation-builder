import { useState, useReducer } from 'react'
import { deleteProperty } from '../Utils/utils'
import CalculationStep from './CalculationStep'
import ConstantsInput from './ConstantsInput'
import UserInput from './UserInput'
import Editor from './Editor'
import TitleInput from './TitleInput'
import CompleteButton from './CompleteButton'
import Console from './Console'
import Result from './Result'


const ACTIONS = {
    STEP_CHANGED: 'STEP_CHANGED',
    STEP_ADDED: 'STEP_ADDED',
    STEP_DELETED: 'STEP_DELETED',
    TITLE_CHANGED: 'TITLE_CHANGED',
    USERINPUT_CHANGED: 'USERINPUT_CHANGED',
    CONSTANTS_CHANGED: 'CONSTANTS_CHANGED',
    RESULT_CHANGED: 'RESULT_CHANGED'
}

const initialState = {
    title: '',
    userInput: '',
    constants: '',
    steps: {
        1: {
            step: 1,
            stepResult: '',
            formula: ''
        }
    },
    result: {
        value: '',
        remarks: ''
    }
}

function calculationReducer(state, { type, payload }) {
    switch (type) {

        case ACTIONS.TITLE_CHANGED: {
            return {
                ...state,
                title: payload
            }
        }
        case ACTIONS.USERINPUT_CHANGED: {
            return {
                ...state,
                userInput: payload
            }
        }
        case ACTIONS.CONSTANTS_CHANGED: {
            return {
                ...state,
                constants: payload
            }
        }
        case ACTIONS.STEP_CHANGED: {
            // const updatedSteps = state.steps.map(step => {
            //     if (step.step === payload.step) {
            //         return payload
            //     } else {
            //         return step
            //     }
            // })
            // return {
            //     ...state,
            //     steps: updatedSteps
            // }
            return {
                ...state,
                steps: {
                    ...state.steps,
                    [`${payload.step}`]: payload
                }
            }
        }
        case ACTIONS.STEP_ADDED: {
            return {
                ...state,
                steps: {
                    ...state.steps,
                    [`${Object.keys(state.steps).length + 1}`]: {
                        step: Object.keys(state.steps).length + 1,
                        stepResult: '',
                        formula: ''
                    }
                }
            }
        }
        case ACTIONS.STEP_DELETED: {
            const newSteps = deleteProperty(state.steps, payload)
            return {
                ...state,
                steps: newSteps
            }
        }
        case ACTIONS.RESULT_CHANGED: {
            return {
                ...state,
                result: payload
            }
        }
        default: {
            throw Error
        }
    }
}



function Calculator() {
    const [calculation, dispatch] = useReducer(calculationReducer, initialState)
    console.log("🚀 ~ file: Calculator.js ~ line 117 ~ Calculator ~ calculation", calculation)

    function handleTitleChange(value) {
        dispatch({ type: ACTIONS.TITLE_CHANGED, payload: value })
    }
    function handleUserInputChange(value) {
        console.log("🚀 ~ file: Calculator.js ~ line 123 ~ handleUserInputChange ~ value", value)
        dispatch({ type: ACTIONS.USERINPUT_CHANGED, payload: value })

    }
    function handleConstantsChange(value) {
        dispatch({ type: ACTIONS.CONSTANTS_CHANGED, payload: value })
    }
    function handleCalculationStepChange(value) {
        dispatch({ type: ACTIONS.STEP_CHANGED, payload: value })
    }

    function handleStepAdd() {
        dispatch({ type: ACTIONS.STEP_ADDED })
    }

    function handleStepDelete(value) {
        dispatch({ type: ACTIONS.STEP_DELETED, payload: value })
    }
    function handleResultChange(value) {
        dispatch({ type: ACTIONS.RESULT_CHANGED, payload: value })
    }

    return (
        <div className='outercontainer'>
            <div className='header'>
                <TitleInput value={calculation.title} onChange={handleTitleChange} />
                <UserInput value={calculation.userInput} onChange={handleUserInputChange} />
                <ConstantsInput value={calculation.constants} onChange={handleConstantsChange} />
            </div>
            <Editor>
                {Object.values(calculation.steps).map((step, index) => (
                    <CalculationStep
                        key={index}
                        value={step}
                        onChange={handleCalculationStepChange}
                        totalSteps={Object.values(calculation.steps).length}
                        handleAdd={handleStepAdd}
                        handleDelete={handleStepDelete}
                    />
                ))}
                <CompleteButton onClick={() => { }} />
                <Result value={calculation.result} onChange={handleResultChange} />
            </Editor>
            <Console />
        </div >
    )
}

export default Calculator