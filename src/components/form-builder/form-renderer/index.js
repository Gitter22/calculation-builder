import React from 'react'
import { FB_ACTIONS } from '../formschemaReducer'

import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import { componentMapper } from '@data-driven-forms/ant-component-mapper';
import { useFormApi } from '@data-driven-forms/react-form-renderer';

const FormTemplate = ({ schema, formFields }) => {
    const { handleSubmit } = useFormApi();

    return (
        <form onSubmit={handleSubmit}>
            {/* {schema.title} */}
            {formFields}
            {/* <button type="submit">Submit</button> */}
        </form>
    )
}

function FormPreview({ schema, dispatch }) {

    function handleSelect(index) {
        dispatch({ type: FB_ACTIONS.SET_SELECTED, index })
    }


    return (
        <div >
            <h2>Preview Area</h2>
            {schema.fields.map((field, index) => (
                <div
                    style={{
                        border: `1px solid ${schema.selected === index ? 'red' : ''}`,
                        margin: "5px",
                        padding: "5px"
                    }}
                    key={index}
                    onClick={() => handleSelect(index)}
                >
                    <FormRenderer
                        FormTemplate={FormTemplate}
                        componentMapper={componentMapper}
                        schema={{ fields: [field] }}
                        onSubmit={console.log}
                        onCancel={() => console.log('Cancel action')}
                    />
                </div>))}

        </div>
    )
}

export default FormPreview