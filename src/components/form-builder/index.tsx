import React, { useReducer } from 'react'
import { formSchemaReducer, initialSchema } from './formschemaReducer';


import FormComponents from './form-components';
import ConfigureComponent from './configure-component';
import FormPreview from './form-renderer';

function FormBuilder() {

    const [formSchema, dispatch] = useReducer(formSchemaReducer, initialSchema)
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
                {formSchema.selected !== undefined && <section style={{ flex: "1", border: "1px solid" }}>
                    <ConfigureComponent dispatch={dispatch} field={formSchema.fields[formSchema.selected]} />
                </section>}

            </section>

        </>
    )
}

export default FormBuilder