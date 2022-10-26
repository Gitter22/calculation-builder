import React, { useReducer, useState } from 'react'
import { useImmerReducer } from 'use-immer'
import { formSchemaReducer, initialSchema } from './formschemaReducer';

import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';

import FormComponents from './form-components';
import ConfigureComponent from './configure-component';
import FormPreview from './form-renderer';

function FormBuilder() {

    const [formSchema, dispatch] = useImmerReducer(formSchemaReducer, initialSchema)
    console.log("🚀 ~ file: index.js ~ line 64 ~ FormBuilder ~ formSchema", formSchema)

    return (
        <>
            <header>
                <h2>Form Builder</h2>
            </header>
            <section style={{ display: "flex", height: "90vh", flexDirection: "row", border: "1px solid" }}>
                <section style={{ flex: "1", border: "1px solid" }}>
                    <FormComponents dispatch={dispatch} />
                </section>
                <section style={{ flex: "3", border: "1px solid", overflow: "auto" }}>
                    <FormPreview schema={formSchema} dispatch={dispatch} />
                </section>
                <section style={{ flex: "1", border: "1px solid" }}>
                    <ConfigureComponent dispatch={dispatch} field={formSchema.fields[formSchema.selected]} />
                </section>
            </section>

        </>
    )
}

export default FormBuilder