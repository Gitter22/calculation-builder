import React from 'react'
import { FB_Actions, FormSchema } from '../formschemaReducer';
import { FormTemplateRenderProps } from '@data-driven-forms/react-form-renderer';

import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import { componentMapper } from '@data-driven-forms/ant-component-mapper';
import { useFormApi } from '@data-driven-forms/react-form-renderer';



interface FormPreviewProps {
    schema: FormSchema,
    dispatch: React.Dispatch<FB_Actions>
}


const FormTemplate = ({ schema, formFields }: FormTemplateRenderProps) => {
    const { handleSubmit } = useFormApi();

    return (
        <>
            <form onSubmit={handleSubmit}>
                {formFields}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}



function FormPreview({ schema, dispatch }: FormPreviewProps) {

    function handleSelect(index: number) {
        dispatch({ type: 'set_selected', index })
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