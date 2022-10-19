import React, { useReducer, useState } from 'react'

import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';

import FormComponents from './form-components';
import ConfigureComponent from './configure-component';
import FormPreview from './form-renderer';


export const FB_ACTIONS = {
    COMPONENT_ADDED: 'COMPONENT_ADDED',
    COMPONENT_CHANGED: 'COMPONENT_CHANGED',
    COMPONENT_DELETED: 'COMPONENT_DELETED',
    // TITLE_CHANGED: 'TITLE_CHANGED',
    // USERINPUT_CHANGED: 'USERINPUT_CHANGED',
    // CONSTANTS_CHANGED: 'CONSTANTS_CHANGED',
    // RESULT_CHANGED: 'RESULT_CHANGED'
}

const initialState = {
    fields: []
}


function formSchemaReducer(state, { type, payload }) {
    switch (type) {

        case FB_ACTIONS.COMPONENT_ADDED: {
            return {
                ...state,
                fields: [...state.fields, payload]
            }
        }
        case FB_ACTIONS.COMPONENT_CHANGED: {
            return {
                ...state,

            }
        }
        case FB_ACTIONS.COMPONENT_DELETED: {
            return {
                ...state,
            }
        }
        default: {
            throw Error
        }
    }
}


function FormBuilder() {

    const [formSchema, dispatch] = useReducer(formSchemaReducer, initialState)
    return (
        <>
            <header>
                <h2>Form Builder</h2>
            </header>
            <section style={{ display: "flex", height: "80vh", flexDirection: "row", border: "1px solid" }}>
                <section style={{ flex: "1", border: "1px solid" }}>
                    <FormComponents dispatch={dispatch} />
                </section>
                <section style={{ flex: "3", border: "1px solid" }}>
                    <FormPreview schema={formSchema} />
                </section>
                <section style={{ flex: "1", border: "1px solid" }}>
                    <ConfigureComponent dispatch={dispatch} />

                </section>
            </section>

        </>
    )
}

export default FormBuilder



// const schema = {
//     fields: [
//         {
//             name: 'first-name',
//             label: 'First name',
//             component: componentTypes.TEXT_FIELD,
//             isRequired: true,
//             validate: [
//                 {
//                     type: validatorTypes.REQUIRED,
//                 },
//             ],
//         },
//         {
//             name: 'last-name',
//             label: 'Last name',
//             component: componentTypes.TEXT_FIELD,
//             isRequired: true,
//             validate: [
//                 {
//                     type: validatorTypes.REQUIRED,
//                 },
//             ],
//         },
//         {
//             name: 'age',
//             label: 'Age',
//             component: componentTypes.TEXT_FIELD,
//             type: 'number',
//         },
//     ],
// }